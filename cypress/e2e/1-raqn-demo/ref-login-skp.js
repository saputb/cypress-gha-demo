/// <reference types = "cypress" />

describe('E2E Login test', () =>{

  it('Accepts cookies', () => {
    cy.on('uncaught:exception', (err) => {
      // Bypass uncaught exceptions
      return false;
    });

    cy.visit('https://eacademy-schwarzkopf-professional-com.ref.web.raqn.io/fr/fr/please-log-me-in'); // Open specific URL
    
    cy.get('#onetrust-accept-btn-handler')
    .click();  // Click the button with ID "onetrust-accept-btn-handler" to dismiss the pop-up
   
    cy.contains ('CONNEXION')
    .click({force:true}); // Click the hidden button under login icon
   
    cy.url()
    .should('contain', '/bienvenue/login.html'); // Assert for correct URL link

    cy.get('#gigya-textbox-78686915856172460')
    .type('liston.yossef@moontrack.net'); // Type Email on textbox

    cy.get('#gigya-password-15255886841441036') 
    .type('Test123!!!'); // Type Password on textbox

    cy.get('#gigya-login-form > :nth-child(6) > .gigya-composite-control-submit > .gigya-input-submit')
    .click(); // Click on login submit button
     
    cy.wait (60000);

    cy.location('pathname').should('eq', '/fr/fr.html')

    cy.get('#calltoaction-fedd7b9e95').should('be.visible');

    // cy.get('#title-6fb8d38fde > .heading1', {
    // })
    // .should('have.text', 'ASK EDUCATION')
    //  // Validate text

  it(' Click hidden Logout button', function (){
    cy.get('.calltoaction__text.calltoaction__text--initial.calltoaction__text--initial-only'); // show hidden element with invoke
    cy.contains('Logout').click();     //click hidden element

      });


  });
});


