import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  preset: 'ts-jest', // Use ts-jest preset
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Transform TypeScript files using ts-jest
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // Setup files to run before each test,
  testEnvironment: 'jsdom', // Use jsdom as test environment
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
};

export default config;
