module.exports = {
  globals: {
    'ts-jest': {}
  },
  modulePaths: ['.'],
  testEnvironment: 'jest-environment-jsdom-sixteen',
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  }
}
