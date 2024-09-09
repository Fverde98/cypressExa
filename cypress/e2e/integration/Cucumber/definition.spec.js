Given('Abrir el navegador principal',()=>{
    cy.visit('https://demoqa.com/text-box')
})
When('Cargando el nombre {word}',(name)=>{
    cy.get('#userName').should('be.visible').type(name)
})
When('Cargando el email {word}',(dir)=>{
    cy.get('#userEmail').should('be.visible').type(dir)
})
And('Cargando la direccion {word}',(dir2)=>{
    cy.get('#currentAddress').should('be.visible').type(dir2)
})
Then('Validar el nombre de la pagina',()=>{
    cy.title().should('eq', 'DEMOQA')
    cy.wait(1500)
})