"use strict";

import { parse } from "./lib/logicLineParser";
import { Logic, preprocessLogic } from "./preprocessLogic";

function evaluateLogic(sequence: Array<string>, logic: Logic): boolean {
  if (logic.kind === "true") {
    return true;
  }
  if (logic.kind === "false") {
    return true;
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
  logicData: string,
  leverNames: Array<string>,
  difficulty: number
): Array<string> {
  const isTerminal = (lhs: string) => leverNames.includes(lhs);
  const logics = preprocessLogic(parse(logicData), isTerminal, difficulty);
  // Makes a list of everything, including temp things
  const allIdentifiers = Object.keys(logics);
  let randomFullOrder: Array<string> = [];
  while (allIdentifiers.length > randomFullOrder.length) {
    const activeIdentifiers = getActiveIdentifierList(randomFullOrder, logics);
    const randomElement =
      activeIdentifiers[Math.floor(Math.random() * activeIdentifiers.length)];
    randomFullOrder.push(randomElement);
  }
  // Filters out temp things
  return randomFullOrder.filter((ide) => leverNames.includes(ide));
}
