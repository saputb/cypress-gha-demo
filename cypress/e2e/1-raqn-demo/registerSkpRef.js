/// <reference types = "cypress" />

function generateRandomEmail() {
    const randomNumber = Math.floor(Math.random() * 1000000);
    return `dontobono+${randomNumber}@gmail.com`;
  }
  
describe('SKP Registration Test', () => {

    it('Handles error', () => {
        cy.on('uncaught:exception', (err) => {
          // Bypass uncaught exceptions
          return false;
        });
    })
    it('Navigates to registration page and register', () => {  
       const email = generateRandomEmail (); // Generate random email
       
       cy.visit('https://eacademy-schwarzkopf-professional-com.ref.web.raqn.io/fr/fr/bienvenue/enregistrer.html/please-log-me-in'); // Open specific URL
       
       cy.get('#onetrust-accept-btn-handler')
        .click(); // Accept cookies button
       
        cy.wait (5000);
       
        cy.xpath('.//input[@value="OUI"]')
        .click(); // Click on OUI button
        
        cy.get('#gigya-loginID-86616308672852050')
        .type(email); // Type Email on textbox
        
        cy.get('#gigya-password-150360966288504350')
        .type('Test123!!!'); // Type Password on textbox

        cy.get('#gigya-password-54377226270436850')
        .type('Test123!!!'); // Confirm Password on textbox

        cy.get('#gigya-dropdown-149290914991369570')
        .select('mr'); // Select option from dropdown
        
        cy.get('#gigya-textbox-133868265315288100')
        .type('Bobby'); // Type First name on textbox
       
        cy.get('#gigya-textbox-152063407649178050')
        .type('Saputra'); // Type Last name on textbox
       
        cy.get('#gigya-textbox-birthday')
        .type('1980-10-05'); // Input BOD

        cy.get('#gigya-dropdown-73235996620585280')
        .select('salon_owner'); // Select Role
       
        cy.get('#gigya-textbox-85817158302988940')
        .type('test'); // Type text
       
        cy.get('#gigya-textbox-74320110375414270')
        .type('1444669'); // Input unique client number
       
        cy.get('#gigya-textbox-106449949100133150')
        .type('42 rue Michel Ange'); // Type Address on textbox
       
        cy.get('#gigya-textbox-54937185545266024')
        .type('Le Havre'); // Type Address on textbox
       
        cy.get('#gigya-textbox-65405752754136910')
        .type('76610'); // Type Postcode on textbox
       
        cy.get('#gigya-checkbox-151487198184346560')
        .check();  // Check on mandatory check box
       
        cy.get('#gigya-checkbox-43250903962922090')
        .check(); // Check on mandatory check box
       
        cy.get('#gigya-checkbox-1791737162387700')
        .check(); // Check on mandatory check box
       
        cy.get('#gigya-checkbox-118137378675131230')
        .check(); // Check on mandatory check box
       
        cy.get('#gigya-register-form > :nth-child(28) > .gigya-composite-control-submit > .gigya-input-submit')
        .click(); // Click Submit button
       
        cy.url()
        .should('include', 'enregistrer.html') // Assert for correct URL link
        
    });

});



        
