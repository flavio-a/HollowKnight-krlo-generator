// Import our custom CSS
import "../scss/styles.scss";

import { getRandomOrder } from "./randomize";
import { outputOrder } from "./make_output";
import logic from "../../resources/krlo-logic.txt";
import names from "../../resources/leverLongNames.json";

document.getElementById("generateButton").onclick = () => {
  const difficulty = document.getElementById("inputDifficulty");
  console.log(difficulty);
  const order = getRandomOrder(logic, Object.keys(names), 1);
  outputOrder(order, names);
};

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
