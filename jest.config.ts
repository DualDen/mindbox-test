import type { JestConfigWithTsJest } from 'ts-jest'

const config : JestConfigWithTsJest = {
    preset: 'ts-jest',
    collectCoverage: true,
    setupFilesAfterEnv: ['./setup-jest.ts'],
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}

export default config