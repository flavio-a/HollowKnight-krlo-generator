import { getRandomOrder } from "./randomize";
import { makeTextOrder, outputOrder } from "./make_output";
// import { makeURLpath } from "./make_splits";
import logic from "../../resources/reo-logic.txt";
import enemiesData from "../../resources/enemiesData.json";

const menderbugData = enemiesData["Journal_Entry-Menderbug"];

let groupingFactor = 0;
let difficulty = 1;
let excludeMenderbug = true;

document.getElementById("inputDifficulty").onchange = (e) => { difficulty = e.target.value };

document.getElementById("inputNoMenderbug").onchange = (e) => { excludeMenderbug = e.target.checked };

// const hksmLink = document.getElementById("hksmLink");
// const hksmLinkAlt = document.getElementById("hksmLinkAlt");

document.getElementById("generateButton").onclick = () => {
  console.log(`Difficulty: ${difficulty}\nExclude Menderbug: ${excludeMenderbug}\nGrouping factor: ${groupingFactor}`);
  if (excludeMenderbug) {
    delete enemiesData["Journal_Entry-Menderbug"];
  }
  else {
    enemiesData["Journal_Entry-Menderbug"] = menderbugData;
  }
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
