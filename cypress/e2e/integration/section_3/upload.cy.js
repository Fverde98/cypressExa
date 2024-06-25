/// <reference types="Cypress" />
import 'cypress-file-upload';
require('cypress-xpath');
describe('upload images', () => {
    it('loading imagenes', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title('eq','DEMOQA')
        cy.wait(1500)
        const ruta = 'uni.jpg'
        cy.get('[type="file"]').attachFile(ruta)
        cy.wait(1500)
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
});