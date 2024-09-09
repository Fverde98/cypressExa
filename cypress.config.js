const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 't5y56t',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    pageLoadTimeout: 120000,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
