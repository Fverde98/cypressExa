/// <reference types="Cypress" />
describe('campo tipo fecha', () => {
    it('fecha1', () => {
        cy.visit('https://demoqa.com/date-picker')
        cy.title().should('eq','DEMOQA')
        cy.wait(1500)
        cy.get('#datePickerMonthYearInput').should('be.visible').clear().click().then(()=>{
            cy.get('.react-datepicker__month-select').should('be.visible').select('March').should('have.value',2)
            cy.get('.react-datepicker__year-select').should('be.visible').select('1998').should('have.value',1998)
            cy.get('.react-datepicker__day--028').click()
        })
    });
    it.only('fecha2', () => {
        cy.visit('https://demoqa.com/date-picker')
        cy.title().should('eq','DEMOQA')
        cy.wait(1500)
        // cy.get('#dateAndTimePickerInput').should('be.visible').clear().click().then(()=>{
        // cy.get('.react-datepicker__month-read-view > .react-datepicker__month-read-view--selected-month').should('be.visible').contains('March').click({force:true})
            
        //})
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
});