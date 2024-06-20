/// <reference types="Cypress" />
require('cypress-plugin-tab')
describe('', () => {
    it('Practice1', () => {
        cy.visit('https://demoqa.com/webtables')
        cy.title().should('eq', 'DEMOQA')
        cy.get('#searchBox').type('Cierra')
        cy.get('#searchBox').should('be.visible').clear()
        cy.wait(1500)
        cy.get('#addNewRecordButton').should('be.visible').click()
        cy.get('#firstName').type('fernando').tab().type('verde').tab().type('fverde@gmail.com').tab()
        .type('25').tab().type('3000').tab().type('Lima')
        cy.wait(1500)
        cy.get('#submit').should('be.visible').click()
        cy.get('#searchBox').type('fernando')
        cy.get('#searchBox').should('be.visible').clear()
        cy.wait(1500)
       
        cy.get('#edit-record-2').should('be.visible').click()
        cy.wait(1500)
        cy.get('#lastName').clear().type('miranda')
        cy.get('#submit').should('be.visible').click()
        cy.wait(1500)
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
});