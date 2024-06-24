require('cypress-xpath');
describe('Nueva seccion checbok', () => {
    it('check one', () => {
        cy.visit('https://demoqa.com/select-menu')
        cy.title().should('eq','DEMOQA')
        cy.wait(1500)
        cy.get('#oldSelectMenu').should('be.visible').select('Green').should('have.value','2')
    });
    it('check two', () => {
        cy.visit('https://www.google.com/?hl=es')
        cy.title().should('eq','Googlee')
        cy.wait(1500)
        cy.get('[name="q"]').should('be.visible').type('ferrari').type('{enter}')
        cy.get('#jZ2SBf > .wM6W7d > span').click()
    });
    it.only('Opcion multi select', () => {
        cy.visit('https://demoqa.com/select-menu')
        cy.title().should('eq','DEMOQA')
        cy.wait(1500)
        cy.get('[name="cars"]').should('be.visible').select('Saab','Audi').then(()=>{
         cy.get('#printme').should('be.visible').click()
        })
        
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
});

