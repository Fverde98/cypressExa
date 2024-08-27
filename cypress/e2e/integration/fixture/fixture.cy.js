/// <reference types="Cypress" />
require('cypress-xpath');
describe('tipos de selectores', () => {
    // before(function(){
    //     cy.fixture("datos2").then(function(data){
    //         globalThis.data=data
    //     })
    // })
    before(function(){
        cy.fixture("datos2").as('usuarios_json')
    })
    it('Cargando desde json', () => {
       
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)

        cy.get('@usuarios_json').then((data)=>{
        cy.get('#userName').should('be.visible').type(data.nombre)
        cy.get('#userEmail').should('be.visible').type(data.email)
        cy.get('#currentAddress').should('be.visible').type(data.dir1)
        cy.get('#permanentAddress').should('be.visible').type(data.dir2)
        cy.get('#submit').should('be.visible').click()
        })
        
    });
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
})