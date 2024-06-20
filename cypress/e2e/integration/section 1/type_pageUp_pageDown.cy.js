/// <reference types="Cypress" />
describe('Example type pageUp and pageDown', () => {
    it("PageUp",()=>{
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1000)
        cy.get('#userName').type('{pageup}')
        cy.wait(2000)
        cy.log("OK").click
    })
    it.only("PageDown",()=>{
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1000)
        cy.get('#userName').type('{pagedown}')
        cy.wait(2000)
        cy.log("OK").click
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
});