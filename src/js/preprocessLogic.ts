"use strict";

import { parse } from "./lib/logicLineParser";

export type Logic =
  | { kind: "identifier"; value: string }
  | { kind: "min-difficulty"; value: number }
  | { kind: "and" | "or"; operands: Array<Logic> }
  | { kind: "false" | "true" };

function sameLogic(logicA: Logic, logicB: Logic): boolean {
  if (logicA.kind !== logicB.kind) {
    return false;
  }
  if (logicA.kind === "false" || logicA.kind === "true") {
    return true;
  }
  if (logicA.kind === "identifier" || logicA.kind === "min-difficulty") {
    // @ts-ignore
    return logicA.value === logicB.value;
  }
  // We don't check "or"/"and" logic for equality
  return false;
}

function simplifyLogic(
  logic: Logic,
  isTerminal: (_: string) => boolean,
  difficulty: number
): Logic {
  if (logic.kind === "identifier" && logic.value === "-") {
    return { kind: "true" };
  }
  if (
    logic.kind === "false" ||
    logic.kind === "true" ||
    logic.kind === "identifier"
  ) {
    return logic;
  }
  if (logic.kind === "min-difficulty") {
    return { kind: difficulty >= logic.value ? "true" : "false" };
  }
  if (logic.kind === "and") {
    const operands = logic.operands
      .map((op) => simplifyLogic(op, isTerminal, difficulty))
      .filter((op) => op.kind !== "true");
    if (operands.length === 0) {
      return { kind: "true" };
    }
    if (operands.length === 1) {
      return operands[0];
    }
    if (operands.some((op) => op.kind === "false")) {
      return { kind: "false" };
    }
    if (operands.every((op) => sameLogic(op, operands[0]))) {
      return operands[0];
    }
    return { kind: "and", operands };
  }
  if (logic.kind === "or") {
    const operands = logic.operands
      .map((op) => simplifyLogic(op, isTerminal, difficulty))
      .filter((op) => op.kind !== "false");
    if (operands.length === 0) {
      return { kind: "false" };
    }
    if (operands.length === 1) {
      return operands[0];
    }
    if (operands.some((op) => op.kind === "true")) {
      return { kind: "true" };
    }
    if (operands.every((op) => sameLogic(op, operands[0]))) {
      return operands[0];
    }
    return { kind: "or", operands };
  }
}

function replaceIdentifier(
  logic: Logic,
  replacements: Record<string, string>
): Logic {
  if (logic.kind === "identifier") {
    let tmpLogic = logic;
    while (tmpLogic.value in replacements) {
      tmpLogic.value = replacements[logic.value];
    }
    return tmpLogic;
  }
  if (
    logic.kind === "false" ||
    logic.kind === "true" ||
    logic.kind === "min-difficulty"
  ) {
    return logic;
  }
  if (logic.kind === "and" || logic.kind === "or") {
    const operands = logic.operands.map((op) =>
      replaceIdentifier(op, replacements)
    );
    return { kind: logic.kind, operands };
  }
}

export function preprocessLogic(
  parserLogic: Array<{ lhs: string; logic: Logic }>,
  isTerminal: (_: string) => boolean,
  difficulty: number
): Record<string, Logic> {
  const localSimplify = (logic: Logic) =>
    simplifyLogic(logic, isTerminal, difficulty);
  let res: Record<string, Logic> = {};
  for (const { lhs, logic } of parserLogic) {
    res[lhs] = localSimplify(logic);
  }
  // I don't wanna code an actual fixpoint computation
  for (let i = 0; i < 10; i++) {
    let replacements: Record<string, string> = Object.fromEntries(
      Object.entries(res)
        .filter(
          ([_, logic]) => logic.kind === "identifier" || logic.kind === "true"
        )
        .filter(([ide, _]) => !isTerminal(ide))
        // @ts-ignore
        .map(([ide, logic]) => [
          ide,
          logic.kind === "identifier" ? logic.value : "-",
        ])
    );
    for (const ide in res) {
      res[ide] = localSimplify(replaceIdentifier(res[ide], replacements));
    }
    for (const toReplace in replacements) {
      delete res[toReplace];
    }
  }
  return res;
}
