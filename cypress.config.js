const { defineConfig } = require('cypress')
// Populate process.env with values from .env file


module.exports = defineConfig ({
  reporter: 'cypress-mochawesome-reporter',

  env: {
    MAILOSAUR_API_KEY: "BkYrEF1CiqbmDLH6",
    auth0_username: process.env.AUTH0_USERNAME,
    auth0_password: process.env.AUTH0_PASSWORD,
    auth0_domain: process.env.REACT_APP_AUTH0_DOMAIN,

  },

  e2e: {

    baseUrl: 'https://eacademy-schwarzkopf-professional-com.ref.web.raqn.io/fr/fr/bienvenue.html/please-log-me-in',
       // defaultCommandTimeout: 30000,
    
    viewportHeight: 720,
    viewportWidth: 1280,
    waitForAnimations: true,
    watchForFileChanges: true,
    pageLoadTimeout: 30000,
    specPattern: "cypress/e2e/**/*.*",
    experimentalStudio: true,
    experimentalWebKitSupport: true,
    // experimentalNetworkStubbing: true,
    chromeWebSecurity:false,

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
