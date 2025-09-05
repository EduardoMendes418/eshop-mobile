// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8081/", 
    supportFile: false, 
    specPattern: "cypress/e2e/**/*.spec.js",
  },
});
