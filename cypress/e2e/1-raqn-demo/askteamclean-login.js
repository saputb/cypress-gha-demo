/// <reference types = "cypress" />

const ASK_PAGE_URL = 'https://www.askteamclean.com/us/en/profile/login.html';
const EMAIL = 'bobby.saputra@henkel.com'
const PASSWORD = 'HerM4W4n22.'

describe('Open Login page and close cookies', () => {
    beforeEach(() => {
        cy.visit(ASK_PAGE_URL);
        cy.get('#onetrust-accept-btn-handler').click();
  
});

    it ('Login Test',  () => {
        cy.url()
        .should('contain', '/profile/login.html'); // Assert for correct URL link

        cy.get('#gigya-textbox-115860621083771000')
        .type(EMAIL); // Type Email on textbox

        cy.get('#gigya-password-98020708136770500') // Type Password on textbox
        .type(PASSWORD);

        cy.get('#gigya-login-form > :nth-child(2) > .gigya-composite-control-submit > .gigya-input-submit')
        .click(); // Click on login submit button

        cy.url()
        .should('contain', '/my-profile.html'); // Assert for correct URL link

        cy.wait (6000)


    it(' Click hidden Logout button', function (){
        cy.get('.calltoaction__text.calltoaction__text--initial.calltoaction__text--initial-only').invoke('show'); // show hidden element with invoke
        cy.contains('Logout').click();     //Click hidden element

         });

        
      });
      
})   

