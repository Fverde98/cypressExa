/// <reference types="Cypress" />
 describe('elementos de una tabla', () => {
    it('tabla for children', () => {
        cy.visit('https://demoqa.com/webtables')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)
        cy.get('#addNewRecordButton').children('.btn-primary').should('contain','Add').click({force:true})
    });
    it('tabla por medio de EQ', () => {
        cy.visit('https://demoqa.com/webtables')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)
        cy.get('#addNewRecordButton').eq(1).should('contain','Add').click({force:true})
    });
    it('tabla por find', () => {
        cy.visit('https://demoqa.com/webtables')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)
        cy.get('#addNewRecordButton').find('.btn-primary').firts().click({force:true})
        cy.wait(1500)
        cy.get('#addNewRecordButton').find('.btn-primary').last().click({force:true})
    });
    it('tabla por nextAll', () => {
        cy.visit('https://demoqa.com/webtables')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)
        cy.get('#addNewRecordButton').should('contain','Add').nextAll().should('have.length',4).click({force:true})
        cy.wait(1500)
    });
    it('seleccionar elemento padre', () => {
        cy.visit('https://demoqa.com/webtables')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)
        cy.get("[type='button']").parent()
        cy.wait(1500)
    });
    it('reto tablas con for and asserts', () => {
        cy.visit('https://demoqa.com/webtables')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)
        for(let x=1;x<=4;x++){
            let nombreBoton=""
            if(x==1){
                nombreBoton='gren'
            }else if(x==2){
                nombreBoton='orange'
            }else if(x==3){
                nombreBoton='red'
            }else if(x==4){
                nombreBoton='all'
            }
            cy.get("[type='button']").eq(x).should('contain', nombreBoton).click({force:true})
            cy.wait(1500)
            cy.get("[type='checkbox']").check()
        }
       
    });
    it('reto table', () => {
        cy.visit('https://demoqa.com/webtables')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)
        const datos =[]
        let cantidadAge=0
        cy.get('[role="row"]').each(($el,index,$list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            for(let i=0;i<=datos.length;i++){
                cy.log(datos[i])
                if(Number(datos[i])){
                    cantidadAge+=Number(datos[i])
                }
            }
            cy.log('la cantidad total es '+ cantidadAge)
           
        }) 
        
       
    }); 
    it.only('valor de un campo', () => {
        cy.visit('https://demoqa.com/webtables')
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)
        const campo = cy.get(':nth-child(2) > .rt-tr > :nth-child(1)')
        campo.each(($el,index,$list)=>{
        const dato=$el.text()
        if(dato.includes('Alden')){
            campo.eq(index).next().next().then((age)=>{
                const Edad=age.text()
                cy.log('la edad es ' +Edad)
                expect(Edad).to.equal('45')
            })
        }
       })
        
       
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
       });
 });