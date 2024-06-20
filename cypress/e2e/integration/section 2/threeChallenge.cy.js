/// <reference types="Cypress" />
describe('3er challeng', () => {
    it('exercise 1', () => {
        cy.visit('https://www.jqueryscript.net/demo/Efficient-Dual-List-Box-Plugin-with-jQuery-Bootstrap/')
        cy.title().should('eq','jQuery Dual List Box Demo')
        cy.wait(1500)
        cy.get('.unselected').should('be.visible').select('Adams Pittman')
        cy.get('.str').click().then(()=>{
        cy.wait(1500)   
        cy.get('.atr').click().then(()=>{
            cy.get('.atl').click().then(()=>{
            cy.log('Se movieron todos los elementos')
            })
        })  
        })
    });
});