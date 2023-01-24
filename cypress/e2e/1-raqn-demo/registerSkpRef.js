/// <reference types = "cypress" />

function generateRandomEmail() {
    const randomNumber = Math.floor(Math.random() * 1000000);
    return `dontobono+${randomNumber}@gmail.com`;
  }
  
describe('Registration Test', () => {

    it('Handle error', () => {
        cy.on('uncaught:exception', (err) => {
          // Bypass uncaught exceptions
          return false;
        });
    })
    it('Navigate to registration page and register', () => {  
        const email = generateRandomEmail ();
        cy.visit('https://eacademy-schwarzkopf-professional-com.ref.web.raqn.io/fr/fr/bienvenue/enregistrer.html/please-log-me-in');
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get(':nth-child(2) > :nth-child(1) > .gigya-composite-control > input').click();
        cy.get('#gigya-loginID-86616308672852050').type(email);
        cy.get('#gigya-password-150360966288504350').type('Test123!!!');
        cy.get('#gigya-password-54377226270436850').type('Test123!!!');
        cy.get('#gigya-dropdown-149290914991369570').select('mr');
        cy.get('#gigya-textbox-133868265315288100').type('Bobby');
        cy.get('#gigya-textbox-152063407649178050').type('Saputra');
        cy.get('#gigya-textbox-birthday').type('1980-10-05');
        cy.get('#gigya-dropdown-73235996620585280').select('salon_owner');
        cy.get('#gigya-textbox-85817158302988940').type('test');
        cy.get('#gigya-textbox-74320110375414270').type('1444669');
        cy.get('#gigya-textbox-106449949100133150').type('42 rue Michel Ange');
        cy.get('#gigya-textbox-54937185545266024').type('Le Havre');
        cy.get('#gigya-textbox-65405752754136910').type('76610');
        cy.get('#gigya-checkbox-151487198184346560').check();
        cy.get('#gigya-checkbox-43250903962922090').check();
        cy.get('#gigya-checkbox-1791737162387700').check();
        cy.get('#gigya-checkbox-118137378675131230').check();
        cy.get('#gigya-register-form > :nth-child(28) > .gigya-composite-control-submit > .gigya-input-submit').click();
        cy.url()
        .should('include', 'enregistrer.html')
        
    });

});



        
