module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    // "^lib/(.*)$": "<rootDir>/lib/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  // Run before the test framework is installed in the environment.
  setupFiles: ["<rootDir>/tests/setup-tests.js"],
  // Run after the test framework has been installed in the environment.
  setupFilesAfterEnv: [],
};
