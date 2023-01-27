/// <reference types = "cypress" />

const ADH_PAGE_URL = 'https://www-beta-henkel-adhesives-com.test.web.raqn.io/us/en.html/please-log-me-in';
const EMAIL = 'programnow-ah@10minmail.de'
const PASSWORD = 'Test12345'

describe('Open Login page and close cookies', () => {
    it ('Logins into the application', () => {

        cy.visit(ADH_PAGE_URL);

    })



})