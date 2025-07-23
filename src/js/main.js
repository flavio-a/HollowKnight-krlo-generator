// Import our CSS
import "../scss/styles.scss";

// Print the version at the bottom
import packagejson from "../../package.json";

document.getElementById(
  "versionDisplay"
).textContent = `Version ${packagejson.version}`;
