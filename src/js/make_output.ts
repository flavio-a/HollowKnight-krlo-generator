"use strict";

import { LeverData } from "./randomize";

function makeLi(
  identifier: string,
  leversData: Record<string, LeverData>
): Element {
  const newLi = document.createElement("li");
  const newContent = document.createTextNode(leversData[identifier].text);
  newLi.appendChild(newContent);
  return newLi;
}

export function outputOrder(
  order: Array<string>,
  leversData: Record<string, LeverData>
) {
  const ul = document.getElementById("randomOrderOutput");
  ul.textContent = "";
  for (const ide of order) {
    ul.appendChild(makeLi(ide, leversData));
  }
}
