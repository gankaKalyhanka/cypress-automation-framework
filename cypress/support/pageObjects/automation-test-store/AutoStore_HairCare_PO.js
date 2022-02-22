class AutoStore_HairCare_PO {
    addHairCareProductToBusket()  {
    globalThis.data.productName.forEach(function(element) {
        cy.addProductToBusket(element).then(() => {
          //  debugger
        }
       )
    })
    cy.get('.dropdown-toggle > .fa').click().debug();
  }
}
      
      export default AutoStore_HairCare_PO