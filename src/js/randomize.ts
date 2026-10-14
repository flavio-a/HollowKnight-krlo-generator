"use strict";

import { SyntaxError } from "./lib/logicLineParser";
import { parse } from "./lib/logicLineParser";
import { Logic, preprocessLogic } from "./preprocessLogic";

export type RandoItemData = {
  text: string;
  group?: string;
};

type Config = {
  logicData: string;
  itemsData: Record<string, RandoItemData>;
};

export type Options = {
  difficulty?: number;
  groupingFactor?: number;
  delayClaw?: boolean;
};

const defaultOptions = { difficulty: 1, groupingFactor: 0, delayClaw: false };

function randomSample<T>(array: Array<T>): T {
  return array[Math.floor(Math.random() * array.length)];
}

function biasedCoinFlip(trueChance: number): boolean {
  return Math.random() < trueChance;
}

function isClaw(elem: string): boolean {
  return elem === "claw" || elem === "Lever-Mantis_Claw";
}

function evaluateLogic(sequence: Array<string>, logic: Logic): boolean {
  switch (logic.kind) {
    case "true":
      return true;
    case "false":
      return false;
    case "min-difficulty":
      // shouldn't appear here
      return false;
    case "identifier":
      return sequence.includes(logic.value);
    case "and":
      return logic.operands.every((op) => evaluateLogic(sequence, op));
    case "or":
      return logic.operands.some((op) => evaluateLogic(sequence, op));
    // default:
    //   throw new RangeError(`Unexpected value for logic.kind: ${logic.kind}`);
  }
}

function getActiveIdentifierList(
  sequence: Array<string>,
  logics: Record<string, Logic>
): Array<string> {
  return Object.entries(logics)
    .filter(
      ([ide, logic]) =>
        !sequence.includes(ide) && evaluateLogic(sequence, logic)
    )
    .map(([ide, _]) => ide);
}

export function getRandomOrder(
  { logicData, itemsData }: Config,
  options: Options
): Array<string> {
  const difficulty = options.difficulty ?? defaultOptions.difficulty;
  const groupingFactor =
    options.groupingFactor ?? defaultOptions.groupingFactor;
  const isTerminal = (lhs: string) => !!itemsData[lhs];
  try {
    const logics = preprocessLogic(parse(logicData), isTerminal, difficulty);
    // Makes a list of everything, including temp things
    const allIdentifiers = Object.keys(logics);
    let randomFullOrder: Array<string> = [];
    while (allIdentifiers.length > randomFullOrder.length) {
      let activeIdentifiers = getActiveIdentifierList(randomFullOrder, logics);
      if (activeIdentifiers.length === 0) {
        throw new Error("LogicError: the current list of active identifiers is empty")
      }
      // Grouping factor logic: with the given chance, filters active identifiers
      // to nearby levers (unless the result is empty)
      if (biasedCoinFlip(groupingFactor / 10)) {
        const last_item = randomFullOrder[randomFullOrder.length - 1];
        const last_group = itemsData[last_item]?.group;
        if (!!last_group) {
          const activeIdentifiersSameGroup = activeIdentifiers.filter(
            (ide) => itemsData[ide]?.group === last_group
          );
          if (activeIdentifiersSameGroup.length > 0) {
            activeIdentifiers = activeIdentifiersSameGroup;
          }
        }
      }
      let randomElement = randomSample(activeIdentifiers);
      // If delay claw is active and draws claw, redraw with 60% chance
      if ((options.delayClaw ?? defaultOptions.delayClaw) && isClaw(randomElement)) {
        if (biasedCoinFlip(0.6)) {
          randomElement = randomSample(activeIdentifiers);
        }
      }
      randomFullOrder.push(randomElement);
    }
    // Filters out temp things
    return randomFullOrder.filter(isTerminal);
  }
  catch (err) {
    if (err instanceof SyntaxError) {
      console.log(err.location);
    }
    throw err;
  }
}
