// Import our custom CSS
import "../scss/styles.scss";

import { getRandomOrder } from "./randomize";
import { makeTextOrder, outputOrder } from "./make_output";
import logic from "../../resources/gbrso-logic.txt";
import ghostsData from "../../resources/ghostsData.json";
import packagejson from "../../package.json";

document.getElementById(
  "versionDisplay"
).textContent = `Version ${packagejson.version}`;

document.getElementById("generateButton").onclick = () => {
  const config = { logicData: logic, itemsData: ghostsData };
  const order = getRandomOrder(config, {});
  const textOrder = makeTextOrder(order, ghostsData);
  outputOrder(textOrder);
};
