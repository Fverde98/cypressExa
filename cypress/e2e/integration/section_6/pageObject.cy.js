import ProyectoUno_PO from '/Users/fernandoverdemiranda/Documents/AutomationQA/cypress/support/pageObjects/proyectoUno_PO/proyectoUno_PO.js'
/// <reference types="Cypress" />

describe('Page object models', () => {
    const master = new ProyectoUno_PO()
   master.visitHome()
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
});