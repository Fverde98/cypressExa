/// <reference types="Cypress" />
describe('alert cypress', () => {
    it('alert one', () => {
        cy.visit('https://demoqa.com/alerts')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)  
        cy.get('#alertButton').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('You clicked a button')
            return true;
        })
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
});