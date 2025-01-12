// Import our custom CSS
import "../scss/styles.scss";

import { getRandomOrder } from "./randomize";
import { outputOrder } from "./make_output";
import logic from "../../resources/krlo-logic.txt";
import leversData from "../../resources/leversData.json";

let groupingFactor = 7;
let difficulty = 1;
console.log("levers data:", leversData);

const inputGroupingFactorValidation = document.getElementById(
  "inputGroupingFactorValidation"
);
function inputGroupingFactorOnchange(e) {
  const val = e.target.value;
  if (val < 0 || val > 10) {
    e.target.classList.add("is-invalid");
    inputGroupingFactorValidation.classList.remove("invisible");
  } else {
    groupingFactor = val;
    e.target.classList.remove("is-invalid");
    inputGroupingFactorValidation.classList.add("invisible");
  }
}
document.getElementById("inputGroupingFactor").onchange =
  inputGroupingFactorOnchange;

function inputDifficultyOnchange(e) {
  difficulty = e.target.value;
}
document.getElementById("inputDifficulty").onchange = inputDifficultyOnchange;

document.getElementById("generateButton").onclick = () => {
  console.log(`Difficulty: ${difficulty}\nGrouping factor: ${groupingFactor}`);
  const config = { logicData: logic, leversData };
  const order = getRandomOrder(config, { difficulty, groupingFactor });
  outputOrder(order, leversData);
};

document.getElementById("settingsForm").reset();
