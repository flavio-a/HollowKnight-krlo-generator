"use strict";

type LeverName = {
  text: string;
};

function makeLi(
  identifier: string,
  leverNames: Record<string, LeverName>
): Element {
  const newLi = document.createElement("li");
  const newContent = document.createTextNode(leverNames[identifier].text);
  newLi.appendChild(newContent);
  return newLi;
}

export function outputOrder(
  order: Array<string>,
  leverNames: Record<string, LeverName>
) {
  const ul = document.getElementById("randomOrderOutput");
  ul.textContent = "";
  for (const ide of order) {
    ul.appendChild(makeLi(ide, leverNames));
  }
}
