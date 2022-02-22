/// <reference types = "Cypress" />


describe("Verify Autocomplete dropdown ", () => {
    it("Select specific product with autocomplete list", () => {
cy.visit('https://webdriveruniversity.com')
cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})


cy.get('#myInput').type('A')

cy.get('#myInputautocomplete-list > *').each(($el, index, $list)=> {
    const prod = $el.text()
    const productToSelect = 'Avacado'

    if(prod === productToSelect) {
        $el.click()
        cy.get('#submit-button').click()
        cy.url().should('include', productToSelect)
    }
}).then(()=> {
    cy.get('#myInput').type('g')

cy.get('#myInputautocomplete-list > *').each(($el, index, $list)=> {
    const prod = $el.text()
    const productToSelect = 'Grape'

    if(prod === productToSelect) {
       // $el.click()
       $el.trigger("click")
        cy.get('#submit-button').click()
        cy.url().should('include', productToSelect)
}
})



    });

})    
})