// Import our custom CSS
import "../scss/styles.scss";

import { getRandomOrder } from "./randomize";
import { makeTextOrder, outputOrder } from "./make_output";
import { makeURLpath } from "./make_splits";
import logic from "../../resources/krlo-logic.txt";
import leversData from "../../resources/leversData.json";
import packagejson from "../../package.json";

let groupingFactor = 7;
let difficulty = 1;

document.getElementById(
  "versionDisplay"
).textContent = `Version ${packagejson.version}`;

const inputGroupingFactorValidation = document.getElementById(
  "inputGroupingFactorValidation"
);
function inputGroupingFactorOnchange(e) {
  const val = e.target.value;
  if (val < 0 || val > 10) {
    e.target.classList.add("is-invalid");
    inputGroupingFactorValidation.classList.remove("d-none");
  } else {
    groupingFactor = val;
    e.target.classList.remove("is-invalid");
    inputGroupingFactorValidation.classList.add("d-none");
  }
}
document.getElementById("inputGroupingFactor").onchange =
  inputGroupingFactorOnchange;

function inputDifficultyOnchange(e) {
  difficulty = e.target.value;
}
document.getElementById("inputDifficulty").onchange = inputDifficultyOnchange;

const hksmLink = document.getElementById("hksmLink");
const hksmLinkAlt = document.getElementById("hksmLinkAlt");

document.getElementById("generateButton").onclick = () => {
  console.log(`Difficulty: ${difficulty}\nGrouping factor: ${groupingFactor}`);
  const config = { logicData: logic, leversData };
  const options = { difficulty, groupingFactor };
  const order = getRandomOrder(config, options);
  const textOrder = makeTextOrder(order, leversData);
  outputOrder(textOrder);
  hksmLink.href = makeURLpath(textOrder, options);
  hksmLink.classList.remove("d-none");
  // hksmLinkAlt.classList.add("d-none");
  hksmLinkAlt.remove();
};

document.getElementById("settingsForm").reset();
