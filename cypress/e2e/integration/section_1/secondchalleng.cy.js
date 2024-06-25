/// <reference types="Cypress" />
require('cypress-xpath');
require('cypress-plugin-tab')
describe('Second challend', () => {
    it('sEARCH', () => {
        cy.visit('https://computer-database.gatling.io/computers')
        cy.title().should('eq','Computers database')
        cy.wait(1500)

        cy.xpath("//input[@id='searchbox']").type('ACE')
        cy.get('#searchsubmit').should('be.visible').click()
        cy.get('#add').should('be.visible').click()


        cy.get('#name').should('be.visible').type('MAC')
        cy.get('#introduced').should('be.visible').type('2024-06-19').tab().type('2024-06-20')
        cy.get('#company').should('be.visible').select("Nokia").should('have.value','16').wait(1500)
        cy.get('.primary').should('be.visible').click()
        cy.wait(1500)
        cy.xpath("//input[@id='searchbox']").type('MAC')
        cy.get('#searchsubmit').should('be.visible').click()
    });
    

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
});