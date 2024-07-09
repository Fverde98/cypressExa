/// <reference types="Cypress" />
describe('manejo de alias', () => {
    it('alias one', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should('eq', 'Input Validation')
        cy.wait(1500)  
        cy.get('#firstname').should('be.visible').as('nom')
        cy.get('@nom').type('fernando')
        cy.get('#surname').should('be.visible').as('ape')
        cy.get('@ape').type('verde miranda')
        cy.get('#age').should('be.visible').as('edad')
        cy.get('@edad').type('26')
        cy.get('#country').should('be.visible').as('pais')
        cy.get('@pais').select('Peru').should('have.value','Peru')
        cy.get('#notes').should('be.visible').as('nota')
        cy.get('@nota').type('Bienvenido')
        cy.get('[type="submit"]').click({force:true})
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
});