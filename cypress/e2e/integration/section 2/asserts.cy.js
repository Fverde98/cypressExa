/// <reference types="Cypress" />
describe('Assert', () => {
    it('Assert contains', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.title('eq','My Shop')
        cy.wait(1500)
        cy.get('#block_top_menu').contains('Women').click()
    });
    it('Assert find eq', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.title('eq','My Shop')
        cy.wait(1500)
        cy.get('.product-container').find('.product-image-container').eq(0).click({force: true})
    });
    it('Assert find eq, validando vestido es nuevo', () => {
        cy.visit('http://www.automationpractice.pl/index.php?id_product=3&controller=product')
        cy.title('eq','My Shop')
        cy.wait(1500)
        //cy.get('.product-container').find('.product-image-container').eq(3).click({force: true})
        cy.get('#product_condition .editable').then((e)=>{
            //cy.log(e).text()
            let estado=e.text()
            //cy.log(estado)
            if(estado=='New'){
                cy.log('Vestido nuevo')
            }
        })
        cy.get('#our_price_display').then((e)=>{
            cy.log(e.text())
            let precio=e.text()
            cy.log(precio)
            precio=precio.slice(1,3)
            cy.log(precio)
            if(precio>30){
                cy.log('el vestido sale de presupuesto')
            }else{
                cy.log('el vestido esta en nuestro presupuesto')
            }
        })

    });
    it('Assert contains.text and have.text', () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title('eq','DEMOQA')
        cy.wait(1500)
        cy.get('#userName').should('be.visible').type("fernando")
        cy.get('#userEmail').should('be.visible').type("verdee@gamil.com")
        cy.get('#submit').should('be.visible').click()
        cy.wait(1500)
        cy.get('#name').should('have.text','Name:fernando')
        cy.get('#name').should('contain.text','fernando')
    });
    it('Assert have.text mas then', () => {
        
        cy.visit("https://demoqa.com/text-box");
        cy.title('eq','DEMOQA')
        cy.wait(1500)
        cy.get('#userName').should('be.visible').type("fernando")
        cy.get('#userName').should('contain.value', 'fernando').then(()=>{
            cy.get('#userEmail').should('be.visible').type("verdee@gamil.com")
            cy.get('#submit').should('be.visible').click()
        })
    });
    it('Assert have.class', () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title('eq','DEMOQA')
        cy.wait(1500)
        cy.get('#userName').should('be.visible').should('have.class','mr-sm-2').then(()=>{
            cy.get('#userName').should('be.visible').type("fernando")
        })
    });
    it('Assert have.class y la funcion and', () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title('eq','DEMOQA')
        cy.wait(1500)
        cy.get('#userName').should('be.visible').and('not.have.class','mr-sm-22').then(()=>{
            cy.get('#userName').should('be.visible').type("fernando")
        })
    });
    it('Assert length', () => {
        cy.visit("https://tablepress.org/demo/");
        cy.title('eq','TablePress Demo · TablePress')
        cy.wait(1500)
        cy.get('.row-hover > tr > .column-1').should('have.length',10).and('have.css','padding','8px')
        })
        it.only('Assert length', () => {
            cy.visit("https://demo.automationtesting.in/Alerts.html");
            cy.title('eq','Alerts')
            cy.wait(1500)
            cy.get('#OKTab > .btn').should('be.visible')
            })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
});