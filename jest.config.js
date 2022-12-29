/** @type {import('jest').Config} */
module.exports = {
  testTimeout: 30000,
  // verbose: true,
  testMatch: [
    "<rootDir>/test/test-helper/**.js"
  ],
  testEnvironment: 'node',
};
