module.exports = {
  preset: 'react-native',
  moduleExtensions: ['ts', 'tsx', 'js'],
  setupFiles: [
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/test/setup.ts',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testPathIgnorePatterns: ['/node_modules/', '/e2e'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|@storybook|@react-native-community|expo-localization|@unimodules)',
  ],
}
