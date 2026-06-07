// Import our CSS
import "../scss/styles.scss";

const commit = process.env.GIT_VERSION;
// const url = `https://github.com/slaurent22/hk-split-maker/commit/${commit}`;

document.getElementById("versionDisplay").textContent = `Commit ${commit}`;
