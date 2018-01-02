module.exports = function(config) {
  config.set({
    files: [
      {
        pattern: "server/src/**/*.js",
        mutated: true,
        included: false
      },
      "server/test/**/*.js"
    ],
    testRunner: "mocha",
    mutator: "javascript",
    transpilers: [],
    reporter: ["clear-text", "progress"],
    testFramework: "mocha",
    coverageAnalysis: "perTest",
    logLevel: 'debug',
    thresholds: { high: 90, low: 90, break: 90 }
  });
};
