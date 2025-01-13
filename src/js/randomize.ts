"use strict";

import { parse } from "./lib/logicLineParser";
import { Logic, preprocessLogic } from "./preprocessLogic";

export type LeverData = {
  text: string;
  group?: string;
};

type Config = {
  logicData: string;
  leversData: Record<string, LeverData>;
};

export type Options = {
  difficulty: number;
  groupingFactor: number;
};

function randomSample<T>(array: Array<T>): T {
  return array[Math.floor(Math.random() * array.length)];
}

function biasedCoinFlip(trueChance: number): boolean {
  return Math.random() < trueChance;
}

function evaluateLogic(sequence: Array<string>, logic: Logic): boolean {
  if (logic.kind === "true") {
    return true;
  }
  if (logic.kind === "false") {
    return false;
  }
  if (logic.kind === "min-difficulty") {
    // shouldn't appear here
    return false;
  }
  if (logic.kind === "identifier") {
    return sequence.includes(logic.value);
  }
  if (logic.kind === "and") {
    return logic.operands.every((op) => evaluateLogic(sequence, op));
  }
  if (logic.kind === "or") {
    return logic.operands.some((op) => evaluateLogic(sequence, op));
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
  { logicData, leversData }: Config,
  { difficulty, groupingFactor }: Options
): Array<string> {
  const isTerminal = (lhs: string) => !!leversData[lhs];
  const logics = preprocessLogic(parse(logicData), isTerminal, difficulty);
  // Makes a list of everything, including temp things
  const allIdentifiers = Object.keys(logics);
  let randomFullOrder: Array<string> = [];
  while (allIdentifiers.length > randomFullOrder.length) {
    let activeIdentifiers = getActiveIdentifierList(randomFullOrder, logics);
    // Grouping factor logic: with the given chance, filters active identifiers
    // to nearby levers (unless the result is empty)
    if (biasedCoinFlip(groupingFactor / 10)) {
      const last_item = randomFullOrder[randomFullOrder.length - 1];
      const last_group = leversData[last_item]?.group;
      if (!!last_group) {
        const activeIdentifiersSameGroup = activeIdentifiers.filter(
          (ide) => leversData[ide]?.group === last_group
        );
        if (activeIdentifiersSameGroup.length > 0) {
          activeIdentifiers = activeIdentifiersSameGroup;
        }
      }
    }
    const randomElement = randomSample(activeIdentifiers);
    randomFullOrder.push(randomElement);
  }
  // Filters out temp things
  return randomFullOrder.filter(isTerminal);
}
