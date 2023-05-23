/* eslint-disable import/no-anonymous-default-export */

export default {
  displayName: "react-graphql-unittesting",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/jest.setup.ts",
    "<rootDir>/setupApiTests.ts",
  ],
  moduleNameMapper: {
    '^.+\\.(css|less)$': 'identity-obj-proxy'
  },
  collectCoverageFrom: [
    'src/**/*{js,jsx,ts,tsx}',
    '!src/**/index.ts',
    '!<rootDir>/node_modules/',
  ],
  coverageReporters: ["clover", "json", "lcov", "text", "html"],
};
