/// <reference types="Cypress" />
describe('manejo Invoke', () => {
    it('Invoke text', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should('eq', 'Input Validation')
        cy.wait(1500)  
        cy.get('.page-body > :nth-child(5)').invoke('text').as('info')
        cy.get('@info').should('contain','The information will be submitted to the server if it passes client side validation.')
        cy.get('[for="firstname"]').invoke('text').as('title')
        cy.wait(1500)  
        cy.get('@title').should('contain','First name:').then(()=>{
            cy.get('#firstname').type('fernando')
        })
    
    
    });
    it('Invoke style', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should('eq', 'Input Validation')
        cy.wait(1500)  
        cy.get('[for="firstname"]').invoke('attr','style','color:Blue; font-size:80px')
    });
    it('Invoke ocultar y mostrar', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should('eq', 'Input Validation')
        cy.wait(1500)  
        cy.get('[for="firstname"]').invoke('hide')
        cy.wait(1500) 
        cy.get('[for="firstname"]').invoke('show','2s')
    });
    it('Invoke reto', () => {
        cy.visit('https://testpages.herokuapp.com/styled/validation/input-validation.html')
        cy.title().should('eq', 'Input Validation')
        cy.wait(1500)  
        cy.get('[for="surname"]').invoke('hide')
        cy.get('#surname').invoke('hide')
        cy.get('[for="firstname"]').invoke('text').as('title')
        cy.get('@title').should('contain','First name:').then(()=>{
            cy.get('#firstname').type('fernando')
            cy.wait(1500) 
            cy.get('[for="surname"]').invoke('show','2s')
            cy.get('#surname').invoke('show','2s')
            cy.wait(1500) 
            cy.get('#surname').type('verde miranda')
        })
      
    });
    it('Invoke src', () => {
        cy.visit('https://demoqa.com/books')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)  
        cy.get('header > a > img').invoke('attr','src').should('include','Toolsqa.jpg')
      
    });
    it.only('Invoke target', () => {
        cy.visit('https://dvwa.co.uk/')
        cy.title().should('eq', 'dvwa.co.uk')
        cy.wait(1500)  
        cy.get('#si144').invoke('removeAttr','target').click({force:true})
    
      
    });
   
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
});