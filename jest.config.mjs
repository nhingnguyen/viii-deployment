export default {
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/example.test.js'],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/.internal/**',
    '!src/LICENSE'
  ],
  coverageReporters: ['text', 'lcov'],
  coverageDirectory: 'coverage'
};
