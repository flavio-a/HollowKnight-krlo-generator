import { getRandomOrder } from "./randomize";
import { makeTextOrder, outputOrder } from "./make_output";
// import { makeURLpath } from "./make_splits";
import logic from "../../resources/reo-logic.txt";
import enemiesData from "../../resources/enemiesData.json";

let groupingFactor = 0;
let difficulty = 1;

// const inputGroupingFactorValidation = document.getElementById(
//   "inputGroupingFactorValidation"
// );
// function inputGroupingFactorOnchange(e) {
//   const val = e.target.value;
//   if (val < 0 || val > 10) {
//     e.target.classList.add("is-invalid");
//     inputGroupingFactorValidation.classList.remove("d-none");
//   } else {
//     groupingFactor = val;
//     e.target.classList.remove("is-invalid");
//     inputGroupingFactorValidation.classList.add("d-none");
//   }
// }
// document.getElementById("inputGroupingFactor").onchange =
//   inputGroupingFactorOnchange;

document.getElementById("inputDifficulty").onchange = (e) => { difficulty = e.target.value };

// function inputDelayClawOnchange(e) {
//   delayClaw = e.target.checked;
// }
// document.getElementById("inputDelayClaw").onchange = inputDelayClawOnchange;

// const hksmLink = document.getElementById("hksmLink");
// const hksmLinkAlt = document.getElementById("hksmLinkAlt");

document.getElementById("generateButton").onclick = () => {
  console.log(`Difficulty: ${difficulty}\nGrouping factor: ${groupingFactor}`);
  const config = { logicData: logic, itemsData: enemiesData };
  const options = { difficulty, groupingFactor };
  const order = getRandomOrder(config, options);
  const textOrder = makeTextOrder(order, enemiesData);
  outputOrder(textOrder);
  // hksmLink.href = makeURLpath(textOrder, options);
  // hksmLink.classList.remove("d-none");
  // hksmLinkAlt.remove();
};

document.getElementById("settingsForm").reset();
