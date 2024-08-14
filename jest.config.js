// jest.config.js
export default {
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    testEnvironment: 'jest-environment-jsdom'
};