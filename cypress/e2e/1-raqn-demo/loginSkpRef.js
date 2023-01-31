/// <reference types = "cypress" />

describe('E2E Login test SKP', () => {
  beforeEach(() => {
  cy.visit('https://eacademy-schwarzkopf-professional-com.ref.web.raqn.io/fr/fr/bienvenue/login.html/please-log-me-in'); // Open specific URL
  Cypress.on('uncaught:exception', (err, runnable) => { return false; })
  cy.get('#onetrust-accept-btn-handler')
  .click();  // Click the button with ID "onetrust-accept-btn-handler" to dismiss the pop-up
  })

  it ('Login and logout into the application', () => {
  
    cy.wait(4000)

    cy.url()
    .should('contain', '/fr/fr/bienvenue/login.html'); // Assert for correct URL link

    cy.get('#gigya-textbox-78686915856172460')
    .type('liston.yossef@moontrack.net'); // Type Email on textbox

    cy.get('#gigya-password-15255886841441036') 
    .type('Test123!!!'); // Type Password on textbox

    cy.get('#gigya-login-form > :nth-child(6) > .gigya-composite-control-submit > .gigya-input-submit')
    .click(); // Click on login submit button
     
    cy.wait (15000);
 
    cy.xpath('.//div[@id="title-6fb8d38fde"]'); // Verify ASK education text

    cy.xpath('.//a[@id="calltoaction-fedd7b9e95"]'); // Verify OSB CTA Button

    cy.get('.login__circle')
    .invoke('show'); // Show hidden element with invoke

    cy.contains('SE DÉCONNECTER')
    .click({force:true});     // Click hidden element
    
    cy.wait (10000)

    

    })
  })

  // cy.url()
    // .should('contain', '/fr/fr/welcome.html'); // Assert for correct URL link
   // cy.url().then((url) => {
    //   expect(url).to.contain.oneOf(['/fr/fr/welcome.html', '/fr/fr/bienvenue.html'])
  