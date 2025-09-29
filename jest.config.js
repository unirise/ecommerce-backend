const { createDefaultPreset } = require("ts-jest");

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  preset: "ts-jest",
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: "src",
  testRegex: ".*\\.spec\\.ts$",
  coverageDirectory: "../coverage",
  testTimeout: 30000,
};