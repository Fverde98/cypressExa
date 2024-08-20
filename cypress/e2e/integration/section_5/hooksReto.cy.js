///<reference types='Cypress' />
require('cypress-plugin-tab')
describe('Reto hooks', () => {
    beforeEach('hooks', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
        cy.wait(1500)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').clear().type('Admin').tab().clear().type('admin123')
        cy.get('.oxd-button').click({force:true})
        cy.wait(1500)
        });
        afterEach(()=>{
            cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
        })
        it('test one', () => {
            cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible').click({force:true})
            cy.wait(1500)
        });
        it('test two', () => {
            cy.get(':nth-child(2) > .oxd-main-menu-item').click({force:true})
            cy.wait(1500)
        });
        it('test three', () => {
            cy.get(':nth-child(7) > .oxd-main-menu-item').should('be.visible').click({force:true})
            cy.wait(1500)
        });
    Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
});