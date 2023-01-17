/// <reference types = "cypress" />

it(
    'Navigate to page and login', 
    {baseUrl: 'https://eacademy-schwarzkopf-professional-com.ref.web.raqn.io/fr/fr/bienvenue/login.html'},
    function () {
        cy.visit('/please-log-me-in')

        cy.get('#onetrust-accept-btn-handler')
        .click();  // Click the button with ID "onetrust-accept-btn-handler" to dismiss the pop-up
    
        cy.get('#gigya-textbox-78686915856172460')
        .type('liston.yossef@moontrack.net'); // Type Email on textbox

        cy.get('#gigya-password-15255886841441036') 
        .type('Test123!!!', {log : false}); // Type Password on textbox

        cy.get('#gigya-login-form > :nth-child(6) > .gigya-composite-control-submit > .gigya-input-submit')
        .click(); // Click on login submit button

        cy.url()
        .should('contain', 'fr/fr.html'); // Assert for correct URL link
     
        cy.get('#title-6fb8d38fde > .heading1')
        cy.get('#title-f9e241ea0d > .heading1')
        cy.get('#calltoaction-fedd7b9e95')
        cy.get('.login__button--logout');
        cy.contains('Logout').click();
    });

// it(
//     'Verify webpage elements',
//     function () {
//         cy.get('#title-6fb8d38fde > .heading1')
//         cy.get('#title-f9e241ea0d > .heading1')
//         cy.get('#calltoaction-fedd7b9e95')


//     }

    


// );
        

// it(

//     'Logged in to webpage',
//     {baseURL: 'https://eacademy-schwarzkopf-professional-com.ref.web.raqn.io/fr/fr.html'},
//     function () {

//     }

    
// )