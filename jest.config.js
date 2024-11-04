module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom', // Use jsdom for testing React components
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Use Babel to transform JavaScript files
      '^.+\\.tsx?$': 'ts-jest',     // Use ts-jest for TypeScript files
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Handle CSS imports
    },
    transformIgnorePatterns: [
      "/node_modules/(?!your-module-to-transform)" // Adjust if needed
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Optional: setup file for testing library configuration
  };
  
