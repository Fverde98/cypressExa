/// <reference types="cypress" />
require('@4tw/cypress-drag-drop')

import 'cypress-file-upload';
describe('event mouse', () => {
    it('drag and drop1', () => {
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        cy.title('eq','The Internet') 
        cy.get('#column-a').drag('#column-b',{force:true})
    });
    it('drag and drop1', () => {
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.title('eq','Drag and drop - demo 3') 
        cy.get('#box1').drag('#box106',{force:true})
    });
    it('mouse over', () => {
        cy.visit('https://www.way2automation.com/')
        cy.title('eq','Get Online Selenium Certification Course | Way2Automation') 
        cy.contains('All Courses').trigger('mouseover')
        cy.wait(1500)
        cy.contains('Lifetime Membership').invoke('removeAtr','target').click()
    });
    it.only('slider', () => {
        cy.visit('https://jqueryui.com/draggable/')
        cy.title('eq','Draggable | jQuery UI') 
        cy.get('.demo-frame').invoke('attr','value','800')
    });
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
});