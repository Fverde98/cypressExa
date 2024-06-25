/// <reference types="Cypress" />
describe('Opciones click', () => {
    it('Click sencillo', () => {
        cy.visit('https://www.testinsane.com/login_up.php')
       
        cy.wait(1000)
        cy.get('.pul-section-item__value > div > .pul-button > .pul-button__inner').should('be.visible').click()
    });
    it('Click force true', () => {
        cy.visit('https://www.testinsane.com/login_up.php')
       
        cy.wait(1000)
        cy.get('.pul-section-item__value > div > .pul-button > .pul-button__inner').should('be.visible').click({force: true})
    });
    it.only('Click por coordenadas(x,y)', () => {
        cy.visit('https://www.testinsane.com/login_up.php')
       
        cy.wait(1000)
        cy.get('.pul-section-item__value > div > .pul-button > .pul-button__inner').should('be.visible').click(50,5)
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
});