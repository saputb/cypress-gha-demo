const { random } = require('cypress/types/lodash')
function generateRandomEmail() {
    const randomNumber = Math.floor(Math.random() * 1000000);
    return `bobby.saputra+${randomNumber}@henkel.com`;
  }

  describe('Registration Test', () => {
    it('Register with a new email', () => {
      const email = generateRandomEmail();
      cy.visit('https://eacademy.schwarzkopf-professional.com/fr/fr/bienvenue/enregistrer.html');
      cy.get('input[name="email"]').type(email);
      cy.get('input[name="firstName"]').type("John");
      cy.get('input[name="lastName"]').type("Doe");
      cy.get('input[name="password"]').type("mypassword");
      cy.get('input[name="passwordConfirm"]').type("mypassword");
      cy.get('input[name="register"]').click();
      cy.url().should('include', '/fr/fr/bienvenue/accueil');
      cy.wait (50000)
      cy.get('#gigya-verification-sent-screen > :nth-child(4) > .gigya-composite-control > input').click()
      cy.url().should('include', '/fr/fr/welcome.html');

    });
  });