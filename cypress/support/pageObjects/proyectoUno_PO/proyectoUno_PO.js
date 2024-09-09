class ProyectoUno_PO{
    visitHome(){
        let tiempo=1000
        describe('POM', () => {
            it('page object models', () => {
                cy.visit('https://demoqa.com/alerts')
                cy.title().should('eq', 'DEMOQA')
                cy.wait(1500)  
               
            });
           
        });
    }
}
export default ProyectoUno_PO;