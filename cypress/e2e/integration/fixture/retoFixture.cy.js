/// <reference types="Cypress" />
require('cypress-xpath');
describe('tipos de selectores', () => {

    it('Cargando desde json', () => {
       
        
        cy.fixture("datos2").then((testdata =>{
            testdata.forEach(data => {
                const d_nombre=data.nombre
                const d_email=data.email
                const d_dir1=data.dir1
                const d_dir2=data.dir2

                cy.visit('https://demoqa.com/text-box')
                cy.title().should('eq', 'DEMOQA')
                cy.wait(1500)
         
 
        cy.get('#userName').should('be.visible').type(d_nombre)
        cy.get('#userEmail').should('be.visible').type(d_email)
        cy.get('#currentAddress').should('be.visible').type(d_dir1)
        cy.get('#permanentAddress').should('be.visible').type(d_dir2)
        cy.get('#submit').should('be.visible').click()
    
            });
        }))
    });
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
})