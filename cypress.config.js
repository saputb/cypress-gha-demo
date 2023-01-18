const { defineConfig } = require('cypress')

module.exports = defineConfig ({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    
    baseUrl: 'https://eacademy-schwarzkopf-professional-com.ref.web.raqn.io/fr/fr/bienvenue.html/please-log-me-in',
       // defaultCommandTimeout: 30000,
    
   viewportHeight: 660,
    viewportWidth: 1000,
    waitForAnimations: true,
    watchForFileChanges: true,
    pageLoadTimeout: 30000,
    specPattern: "cypress/e2e/**/*.*",
    experimentalStudio: true,
    // experimentalNetworkStubbing: true,
    // chromeWebSecurity:false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
