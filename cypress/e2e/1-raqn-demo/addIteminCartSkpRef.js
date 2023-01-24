/// <reference types = "cypress" />

const SKP_PAGE_URL = 'https://eacademy-schwarzkopf-professional-com.ref.web.raqn.io/fr/fr/bienvenue/login.html/please-log-me-in';
const EMAIL = 'bobby.saputra@henkel.com'
const PASSWORD = 'Test123!!!'

describe('Open Login page and close cookies', () => {
    // beforeEach(() => {

    it ('Login into the application',  () => {

        cy.visit(SKP_PAGE_URL);
        
        cy.get('#onetrust-accept-btn-handler').click();

        cy.contains ('CONNEXION')
        .click({force:true}); // Click the hidden button under login icon

        cy.url()
        .should('contain', '/bienvenue/login.html'); // Assert for correct URL link

        cy.get('#gigya-textbox-78686915856172460') // Type Email on textbox
        .type(EMAIL); 

        cy.get('#gigya-password-15255886841441036')  // Type Password on textbox
        .type(PASSWORD);

        cy.get('#gigya-login-form > :nth-child(6) > .gigya-composite-control-submit > .gigya-input-submit')
        .click(); // Click on login submit button

        cy.wait (12000)

        cy.url()
        .should('contain', '/fr/fr.html'); // Assert for correct URL link
 

        // cy.get('#btn__calltoaction-39502e7133').invoke('show'); // Show hidden element with invoke
        // cy.contains('SE DÉCONNECTER').click({force:true});     //click hidden element

        
    })
    

});