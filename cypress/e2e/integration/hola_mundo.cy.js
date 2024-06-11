describe('Bienvenido cypress', () => {
    it("Mi primer test",()=>{
        cy.log("Hola mundo")
        cy.wait(3000)
    })
    it('Segundo test', () => {
        cy.visit("https://demoqa.com/text-box");
        cy.get('#userName').type("fernandi")
        cy.wait(3000)
        cy.get('#userEmail').type("verdee")
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
});