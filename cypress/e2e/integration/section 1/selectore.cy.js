/// <reference types="Cypress" />
require('cypress-xpath');
describe('tipos de selectores', () => {
    it('Selector ID', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)
        cy.get('#userName').should('be.visible').type('fernando')
        cy.get('#userEmail').should('be.visible').type('fernando@gmail.com')
    });
    it('Selector Atributo', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)
        cy.get("[placeholder='Full Name']").should('be.visible').type('fernando')
        cy.get("[placeholder='name@example.com']").should('be.visible').type('fernando@gamil.com')
    });
    it('Selector xpath', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)
        cy.xpath("//*[@id='userName']").should('be.visible').type('fernando')
        cy.xpath("//*[@id='userEmail']").should('be.visible').type('fernando@gamil.com')
        
    });
    it('Selector contains', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)
        cy.get('.custom-control-label').contains('Female').click()
        cy.get('.custom-control-label').contains('Other').click()
        
    });
    it.only('Selector copy selector', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)
        cy.get('#userNumber').should('be.visible').type('926628948')
        
        
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
});