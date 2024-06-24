/// <reference types="Cypress" />
describe('seccion checkbox', () => {
    it('check uno', () => {
        cy.visit('https://demos.jquerymobile.com/1.4.0-rc.1/checkboxradio-checkbox/')
        cy.title().should('eq','Checkbox - jQuery Mobile Demos')
        cy.wait(1500)
        cy.get('[type="checkbox"]').check({force: true}).should('be.checked')
        cy.wait(2000)
        cy.get('[type="checkbox"]').uncheck({force: true}).should('not.be.checked')
    });
    it.only('check uno', () => {
        cy.visit('https://demos.jquerymobile.com/1.4.0-rc.1/checkboxradio-checkbox/')
        cy.title().should('eq','Checkbox - jQuery Mobile Demos')
        cy.wait(1500)
        cy.get(':nth-child(6) > form > .ui-checkbox > .ui-btn').check({force: true}).should('be.checked')
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
});