module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '^pages/(.*)': '<rootDir>/src/pages/$1',
    '^@/(.*)': '<rootDir>/src/$1',
    '^~/(.*)': '<rootDir>/public/$1',
    _variable: '<rootDir>/src/styles/_variable.scss',
    '\\.(css|scss)$': '<rootDir>/node_modules/jest-css-modules'
  },
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.jest.json'
    }
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/src/__tests__/Utils']
}
