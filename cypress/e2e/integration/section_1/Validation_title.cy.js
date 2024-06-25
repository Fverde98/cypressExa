/// <reference types="Cypress" />
describe('Seccion 1 validacion titulo', () => {
    it("Test validar titulo pagina",()=>{
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq', 'DEMOQA')
        cy.log("OK")
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
});