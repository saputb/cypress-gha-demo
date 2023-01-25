/// <reference types = "cypress" />

describe('E2E Login test SKP', () =>{

  // it('Accepts cookies', () => {
  //   cy.on('uncaught:exception', (err) => {
  //     // Bypass uncaught exceptions
  //     return false;
  //   });

it ('Logins and logout into the application', () => {

    cy.visit('https://eacademy-schwarzkopf-professional-com.ref.web.raqn.io/fr/fr/bienvenue/login.html/please-log-me-in'); // Open specific URL
    Cypress.on('uncaught:exception', (err, runnable) => { return false; })

    cy.get('#onetrust-accept-btn-handler')
    .click();  // Click the button with ID "onetrust-accept-btn-handler" to dismiss the pop-up
   
    cy.wait(4000)

    cy.url()
    .should('contain', '/fr/fr/bienvenue/login.html'); // Assert for correct URL link

    cy.get('#gigya-textbox-78686915856172460')
    .type('liston.yossef@moontrack.net'); // Type Email on textbox

    cy.get('#gigya-password-15255886841441036') 
    .type('Test123!!!'); // Type Password on textbox

    cy.get('#gigya-login-form > :nth-child(6) > .gigya-composite-control-submit > .gigya-input-submit')
    .click(); // Click on login submit button
     
    cy.wait (12000);

    cy.xpath('.//div[@id="title-6fb8d38fde"]'); // Verify ASK education text

    cy.xpath('.//a[@id="calltoaction-fedd7b9e95"]'); // Verify OSB CTA Button

    cy.get('.login__circle > span')
    .invoke('show'); // Show hidden element with invoke

    cy.contains('SE DÉCONNECTER').click({force:true});     //click hidden element

    })

  })

