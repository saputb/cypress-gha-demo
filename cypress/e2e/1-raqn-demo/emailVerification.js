/// <reference types = "cypress" />

describe('Register new account and verify email ', () => {
    const serverId = 'ziyvoiyo'
    const serverDomain = 'ziyvoiyo.mailosaur.net'
    const emailAddress = Math.random().toString(36).substring(2, 15)+"@"+ serverDomain

    it ('Registers new email and gets verification link', () => {
        cy.visit('https://eacademy-schwarzkopf-professional-com.ref.web.raqn.io/fr/fr/bienvenue/enregistrer.html/please-log-me-in');
        cy.get('#onetrust-accept-btn-handler').click();
        cy.wait (5000);
        cy.xpath('.//input[@value="OUI"]').click();
        cy.get('#gigya-loginID-86616308672852050').type(emailAddress);
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
        cy.get('#gigya-textbox-54937185545266024').type('Le Havre')
        cy.get('#gigya-textbox-65405752754136910').type('76610');
        cy.get('#gigya-checkbox-151487198184346560').check();
        cy.get('#gigya-checkbox-43250903962922090').check();
        cy.get('#gigya-checkbox-1791737162387700').check();
        cy.get('#gigya-checkbox-118137378675131230').check();
        cy.get('#gigya-register-form > :nth-child(28) > .gigya-composite-control-submit > .gigya-input-submit').click();
        cy.url()
        .should('include', 'enregistrer.html')

    const EMAIL = 'bobby.saputra@henkel.com'
    const PASSWORD = 'HerM4W4n123!!!'

    let confirmationLink
        cy.visit('https://mailosaur.com/app/servers/ziyvoiyo');
        cy.get('#email').type(EMAIL);
        cy.get('[data-testid="btn"]').click();
        cy.get('#password').type(PASSWORD);
        cy.get('.css-16l1998').click();
        cy.mailosaurGetMessage(serverId, {
                  sentTo: emailAddress
               }).then(emailAddress => {
                    cy.log(emailAddress.subject)
                    cy.wait (5000);
                    confirmationLink = emailAddress.html.links[0].href;
                    cy.visit(confirmationLink);
                    cy.contains('Votre email est vérifié!');
                    // cy.xpath(".//a[contains(@href,'registration.schwarzkopfpro.com') and @class='link c-white']")
                    // .invoke("removeAttr", "target").click() // will open the contact page in a new tab
                    // cy.get(confirmationLink).click()
                    // cy.get('.btn-19 > a.link').contains('VÉRIFIER VOTRE COMPTE')
                    // cy.get('.heading4').contains('Votre email est vérifié!')
                    
    
                    })
                })
})
