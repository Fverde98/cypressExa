/// <reference types="Cypress" />
require('cypress-plugin-tab')
describe('funcion tab', () => {
    it("type con tab",()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1000)
        cy.get('#firstName').type("Fernando").tab().
        type("verde").tab().type("fverde@gmail.com")
       

    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
});