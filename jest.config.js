module.exports = {
    testEnvironment: 'node',
    setupFilesAfterEnv: ['./jest.setup.js'],    
    moduleDirectories: ["node_modules"],
    reporters: [
        'default', [
            './node_modules/jest-html-reporter',
            {
                pageTitle: 'Test Report',
                outputPath: 'output/test/test-report.html',
            },
        ],
    ],
};
