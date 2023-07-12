module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/components/**/*.{ts,tsx}'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  coverageReporters: ['cobertura', 'text'],
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: 'coverage',
      outputName: 'junit.xml',
    }]
  ]
}