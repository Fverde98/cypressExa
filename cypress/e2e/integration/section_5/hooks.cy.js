///<reference types='Cypress' />
describe('Hooks', () => {
    beforeEach(()=>{
        cy.visit('https://katalon.com/resources-center/blog/web-qa-checklist')
        cy.title().should('eq', 'The Ultimate QA Checklist For Websites And Software')
    })
    it('test one', () => {
        cy.get(':nth-child(8) > :nth-child(1) > .todo-list > :nth-child(1) > .todo-list__label > input').check().should('be.checked')
        cy.wait(1500)    
    });
    it('test dos', () => {
        cy.get(':nth-child(8) > :nth-child(1) > .todo-list > :nth-child(1) > .todo-list__label > input').uncheck().should('not.be.checked')
        });
    Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
});