/// <reference types="Cypress" />
describe('intro assert', () => {
    it('Demo asserts', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1000)
        cy.get('#firstName').should('be.visible').type("fernando")
        cy.get('#lastName').should('be.visible').type("verde")
        cy.get('#userEmail').should('be.visible').should('be.enabled').type("fverde@gmail.com")
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
});