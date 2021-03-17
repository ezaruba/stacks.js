module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: './coverage/',
  collectCoverage: true,
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: ['TS151001'],
      },
    },
  },
  moduleFileExtensions: ['js', 'ts', 'd.ts'],
  setupFilesAfterEnv: ['./tests/setup.js'],
  testTimeout: 10000,
};
