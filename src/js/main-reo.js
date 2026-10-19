import { getRandomOrder } from "./randomize";
import { makeTextOrder, outputOrder } from "./make_output";
import { makeBaseHksmJSON, makeURLpath } from "./make_splits";
import logic from "../../resources/reo-logic.txt";
import enemiesData from "../../resources/enemiesData.json";

let difficulty = 1;
let excludeMenderbug = true;
let excludeGodhome = true;
let excludeVoidIdol = true;
let excludeWeatheredMask = true;

document.getElementById("inputDifficulty").onchange = (e) => {
  difficulty = e.target.value;
};

document.getElementById("inputNoMenderbug").onchange = (e) => {
  excludeMenderbug = e.target.checked;
};
document.getElementById("inputNoGodhome").onchange = (e) => {
  excludeGodhome = e.target.checked;
};
document.getElementById("inputNoVoidIdol").onchange = (e) => {
  excludeVoidIdol = e.target.checked;
};
document.getElementById("inputNoWeatheredMask").onchange = (e) => {
  excludeWeatheredMask = e.target.checked;
};

const hksmLink = document.getElementById("hksmLink");
const hksmLinkAlt = document.getElementById("hksmLinkAlt");

function getFilteredEnemiesData() {
  let currentData = Object.assign({}, enemiesData);
  if (excludeMenderbug) {
    delete currentData["Journal_Entry-Menderbug"];
  }
  if (excludeGodhome) {
    for (const i in currentData) {
      if (currentData[i].group === "Godhome") {
        delete currentData[i];
      }
    }
  }
  if (excludeVoidIdol) {
    delete currentData["Journal_Entry-Void_Idol"];
  }
  if (excludeWeatheredMask) {
    delete currentData["Journal_Entry-Weathered_Mask"];
  }
  return currentData;
}

document.getElementById("generateButton").onclick = () => {
  console.log(
    `Difficulty: ${difficulty}\nExclude Menderbug: ${excludeMenderbug}`
  );
  const filteredEnemiesData = getFilteredEnemiesData();
  const config = { logicData: logic, itemsData: filteredEnemiesData };
  const options = { difficulty, excludeMenderbug };
  const order = getRandomOrder(config, options);
  const textOrder = makeTextOrder(order, filteredEnemiesData);
  outputOrder(textOrder);
  const hksmjson = makeBaseHksmJSON(textOrder, options, {
    categoryName: "Hunter's Mark REO",
    splitName: "ManualSplit",
  });
  hksmLink.href = makeURLpath(hksmjson);
  hksmLink.classList.remove("d-none");
  hksmLinkAlt.remove();
};

document.getElementById("settingsForm").reset();
