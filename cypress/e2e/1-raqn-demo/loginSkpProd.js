/// <reference types = "cypress" />

describe('E2E Login test SKP', () => {
  beforeEach(() => {
  cy.visit('https://eacademy.schwarzkopf-professional.com/fr/fr/bienvenue/login.html'); // Open specific URL
  Cypress.on('uncaught:exception', (err, runnable) => { return false; })
  cy.get('#onetrust-accept-btn-handler')
  .click();  // Click the button with ID "onetrust-accept-btn-handler" to dismiss the pop-up
  })

  it ('Login and logout into the application', () => {
  
    cy.wait(4000)

    cy.url()
    .should('contain', '/fr/fr/bienvenue/login.html'); // Assert for correct URL link

    cy.get('#gigya-textbox-78686915856172460')
    .type('p.koehler90@gmx.de'); // Type Email on textbox

    cy.get('#gigya-password-15255886841441036') 
    .type('Test1234'); // Type Password on textbox

    cy.get('#gigya-login-form > :nth-child(6) > .gigya-composite-control-submit > .gigya-input-submit')
    .click(); // Click on login submit button
     
    cy.wait (20000);
 
    cy.get('.login__circle')
    .invoke('show'); // Show hidden element with invoke

    cy.get('.calltoaction__text.calltoaction__text--initial.calltoaction__text--initial-only')
    .contains('SE DÉCONNECTER')
    .click({force:true});     // Click hidden element
    
    cy.wait (10000)
    })
  })
