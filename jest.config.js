module.exports = {
  roots: ['<rootDir>/app/'],
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  transform: {
    '^.+\\.{ts, tsx}$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  setupFiles: [
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/test/setup.ts',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testPathIgnorePatterns: ['/node_modules/', '/e2e', '/custom'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|@storybook|@react-native-community)',
  ],
  collectCoverage: true,
  coverageDirectory: './jest-coverage',
  collectCoverageFrom: ['app/**/*.{ts,tsx}', '!**/node_modules/**', '!**/vendor/**'],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 15,
      lines: 35,
      statements: 15,
    },
  },
  globals: {
    __DEV__: true,
  },
}
