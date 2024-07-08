/// <reference types="Cypress" />
require('cypress-xpath');
describe('bucles for y each', () => {
    it('for uno', () => {
        for(let i=1; i<=10;i++){
            cy.log('Numero :'+i)
        }
    });
    it('for dos', () => {
        for(let i=1; i<=10;i++){
            let t=5
            cy.log(t+ 'x'+i + '='+t*i)
        }
    });
    it('each uno', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.title().should('eq','My Shop')
        cy.wait(1500)
        cy.get('.product-name').each(($el,index,$list)=>{
            
            cy.log($el.text())
        })
    });
    it('each dos', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.title().should('eq','My Shop')
        cy.wait(1500)
        for(let x=0; x<=3; x++){
            cy.get('#center_column').eq(x).click({force:true})
            cy.wait(1500)
            cy.get('#quantity_wanted').should('be.visible').clear().type('4')
            cy.wait(1500)
            cy.get('#group_1').select('M').should('have.value','2')
            cy.wait(1500)
            cy.get('.exclusive > span').should('be.visible').click({force:true})
            cy.xpath("//span[contains(.,'Proceed to checkout')]").click({force:true})
            cy.wait(1500)
            cy.get('.icon-home').should('be.visible').click({force:true})
        }
    });
    it.only('each tres', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.title().should('eq','My Shop')
        cy.wait(1500)

        const datos=[];
        cy.get('.product-name').each(($el,index,$list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            for(let x=0; x<=datos.length; x++){
                cy.get('#center_column').eq(x).click({force:true})
                cy.wait(1500)
                cy.get('#quantity_wanted').should('be.visible').clear().type('4')
                cy.wait(1500)
                cy.get('#group_1').select('M').should('have.value','2')
                cy.wait(1500)
                cy.get('.exclusive > span').should('be.visible').click({force:true})
                cy.xpath("//span[contains(.,'Proceed to checkout')]").click({force:true})
                cy.wait(1500)
                cy.get('.icon-home').should('be.visible').click({force:true})
            }
        })

       
    });
});