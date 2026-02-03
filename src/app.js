const { versionInfo, upgradeVersion } = require("./version");

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("version").innerText =
    `Version: ${versionInfo.version}`;

  document.getElementById("btnUpdate").addEventListener("click", () => {
    const newVersion = upgradeVersion();
    document.getElementById("version").innerText =
      `Version: ${newVersion.version}`;
  });
});
