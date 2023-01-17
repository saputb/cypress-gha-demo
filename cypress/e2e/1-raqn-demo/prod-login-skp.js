/// <reference types = "cypress" />

describe('Login form test', () => {

  it('prod-login-skp.js', function() {

    cy.visit('https://eacademy.schwarzkopf-professional.com/de/de/willkommen.html');

    cy.get('#onetrust-accept-btn-handler')
    .click();

    cy.get('.login__button--login > heliux-icon > svg')
    .click();

    cy.get('#calltoaction-84761c7f4e')
    .click();
    
    cy.get('#gigya-textbox-78686915856172460')
    .type('bobby.saputra@henkel.com');
    
    cy.get('#gigya-password-15255886841441036')
    .type('Test123!!!');
   
    cy.get('#gigya-login-form > :nth-child(6) > .gigya-composite-control-submit > .gigya-input-submit')
    .click();
   
    cy.contains ('LOGIN')
    .click({force:true});
   
    cy.get('#btn__calltoaction-0fa86487f7').click();

  });
});


