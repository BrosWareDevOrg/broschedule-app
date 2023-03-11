module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: ['**/src/**/*.test.js'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  testPathIgnorePatterns: [
    'src/components/CounterForTest/CounterForTest.test.js',
  ],
  setupFilesAfterEnv: ['./src/utils/tests/setupTests.js'],
  updateSnapshot: false,
};
