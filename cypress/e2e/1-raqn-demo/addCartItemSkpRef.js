/// <reference types = "cypress" />

const SKP_PAGE_URL = 'https://eacademy-schwarzkopf-professional-com.ref.web.raqn.io/fr/fr/bienvenue/login.html/please-log-me-in';
const EMAIL = 'bobby.saputra@henkel.com'
const PASSWORD = 'Test123!!!'

describe('Open Login page and close cookies', () => {

    it ('Logins into the application',  () => {

        cy.visit(SKP_PAGE_URL); // Visit URL
        
        cy.get('#onetrust-accept-btn-handler').click(); // Click on allow cookies

        cy.url()
        .should('contain', '/bienvenue/login.html'); // Assert for correct URL link

        cy.get('#gigya-textbox-78686915856172460', { timeout: 10_000 }) // Type Email on textbox
        .type(EMAIL); 

        cy.get('#gigya-password-15255886841441036')  // Type Password on textbox
        .type(PASSWORD);

        cy.get('#gigya-login-form > :nth-child(6) > .gigya-composite-control-submit > .gigya-input-submit')
        .click(); // Click on login submit button

        cy.wait(14000)

        cy.xpath('.//h1[normalize-space()="ASK EDUCATION"]')
        .should('be.visible');
       
        cy.xpath('.//a[@id="calltoaction-fedd7b9e95"]')
        .click(); // Click on CTA button

        cy.wait(6000)

        cy.url()
        .should('contain', '/fr/fr/catalogue.html'); // Assert for correct URL link
     
        cy.xpath('.//div[@id="title-fa937ee377"]//h4[contains(@class,"heading5 apply-margins apply-font-style title__heading insideTemplate")][normalize-space()="BlondMe Signature"]')
        .should('be.visible');
      
        cy.xpath('./html[1]/body[1]/div[2]/div[1]/div[2]/main[1]/div[1]/heliux-section[2]/div[3]/heliux-section[1]/div[3]/heliux-teaserlist-v2[1]/div[1]/ul[1]/li[1]/div[1]/div[1]/heliux-section[1]/div[3]/section[2]/div[1]/heliux-grid[1]/div[2]/heliux-section[1]/div[3]/heliux-text[1]/div[1]/p[1]')
        .should('be.visible');

        cy.xpath('./html[1]/body[1]/div[2]/div[1]/div[2]/main[1]/div[1]/heliux-section[2]/div[3]/heliux-section[1]/div[3]/heliux-teaserlist-v2[1]/div[1]/ul[1]/li[1]/div[1]/div[1]/heliux-section[1]/div[3]/section[2]/div[1]/heliux-grid[1]/div[2]/heliux-calltoaction[1]/div[2]/div[1]/a[1]')
        cy.contains('EXPLORER').click();

        cy.wait(10000)

        cy.url()
        .should('contain', '/course/1454700/BlondMe%20Signature'); // Assert for correct URL link
    
      
        cy.get('.image__base > .image__imgPreview > .image__img').should('be.visible');

        cy.get('.heading1').should('contain','BlondMe Signature');

        cy.get('.enrollmentBlock__listPrice').contains ('125,00 €');

        cy.get('#btn__calltoaction-6262144cf6').click();

        cy.get('#isAssignToMe').check(); // Check mark on Assign to me
       
        cy.xpath('.//button[@aria-label="Remove Trainee email input"]//span[@class="icon__svgWrap icon__svgWrap--initial icon__svgWrap--initial-only"]//*[name()="svg"]')
        .click(); 

        cy.wait (4000)

        cy.get('#btn__calltoaction-86f9e202fc').click();

        cy.wait (4000)

        cy.get('#calltoaction-1e1b89e387').click(); // Click on cart button

        cy.url()
        .should('contain', '/fr/fr/commerce/cart.html'); // Assert for correct URL link

        cy.get('rqe-osb-cart').should('be.visible');

        cy.wait(5000)

        cy.get('.login__circle > span')
        .invoke('show'); // Show hidden element with invoke
    
        cy.contains('SE DÉCONNECTER').click({force:true});     //click hidden element
  
        cy.wait(10000)

        cy.url()
        .should('contain', '/fr/fr/welcome.html'); // Assert for correct URL link
        
    })
    
})

    

