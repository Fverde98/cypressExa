/// <reference types="Cypress" />
describe('referencias windows', () => {
    it('window propiedades charset', () => {
        cy.visit('https://www.jqueryscript.net/demo/Efficient-Dual-List-Box-Plugin-with-jQuery-Bootstrap/')
        cy.title('eq','jQuery Dual List Box Demo')
        cy.wait(1500)
        cy.document().should('have.a.property','charset').and('eq','UTF-8')
    });
    it.only('window url', () => {
        cy.visit('https://www.jqueryscript.net/demo/Efficient-Dual-List-Box-Plugin-with-jQuery-Bootstrap/')
        cy.title('eq','jQuery Dual List Box Demo')
        cy.wait(1500)
        cy.url().should('include','Efficient-Dual-List-Box-Plugin-with-jQuery-Bootstrap/')
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
});