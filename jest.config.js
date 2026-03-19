module.exports = {
  testEnvironment: 'node',
  reporters: [
    'default',
    ['jest-allure2-reporter', { outputDir: 'allure-results' }]
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['tests/e2e']
};