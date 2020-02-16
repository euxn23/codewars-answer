module.exports = {
  roots: ['<rootDir>/src/ts'],
  testMatch: ['**/(*.)+spec.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  silent: false,
  verbose: false
};
