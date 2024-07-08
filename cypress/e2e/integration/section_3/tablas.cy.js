/// <reference types="Cypress" />
 describe('elementos de una tabla', () => {
    it('tabla', () => {
        cy.visit('https://demoqa.com/webtables')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)
        cy.get('#addNewRecordButton').should('contain','Add').click({force:true})
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
 });