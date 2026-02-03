const { upgradeVersion, versionInfo } = require("../src/version");

test("Upgrade version should change version number", () => {
  const updated = upgradeVersion();
  expect(updated.version).toBe("2.0.0");
});
