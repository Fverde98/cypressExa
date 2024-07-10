///<reference types="Cypress" />
describe('configuracion uso de snipets', () => {
    it('back, forward', () => {
        cy.visit('https://demoqa.com/')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)   
        cy.get(':nth-child(1) > :nth-child(1) > .avatar').should('be.visible').click({force:true})
        cy.wait(1500)  
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('be.visible').click({force:true})
        cy.wait(1500) 
        cy.go('back')
        cy.go('back')
        cy.go('forward')
        cy.go('forward')
    });
    it.only('reload', () => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)   
        cy.get('#userName').should('be.visible').type('fernando')
        cy.reload()
        cy.go('back')
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
});

