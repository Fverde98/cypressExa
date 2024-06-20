/// <reference types="Cypress" />
describe('Funciones para type', () => {
    it("Test validar titulo pagina",()=>{
        cy.visit("https://www.google.com.pe/?hl=es");
        cy.title().should('eq', 'Google')
        cy.wait(1500)
        cy.get('#APjFqb').type("cypress io {enter}")

        cy.log("OK").click
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
});