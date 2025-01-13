"use strict";

import { LeverData } from "./randomize";

function makeLi(identifier: string): Element {
  const newLi = document.createElement("li");
  const newContent = document.createTextNode(identifier);
  newLi.appendChild(newContent);
  return newLi;
}

export function outputOrder(textOrder: Array<string>) {
  const ul = document.getElementById("randomOrderOutput");
  ul.textContent = "";
  for (const ide of textOrder) {
    ul.appendChild(makeLi(ide));
  }
}

export function makeTextOrder(
  order: Array<string>,
  leversData: Record<string, LeverData>
): Array<string> {
  return order.map((ide) => leversData[ide].text);
}
