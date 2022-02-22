/// <reference types = "Cypress" />


describe("Verify radiobuttons via webdriveruni", () => {
before(function(){
    cy.visit('https://webdriveruniversity.com')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
})
    it("Check cpecific radiobutton", () => {


cy.get('#radio-buttons').find("[type=radio]").first().check()
cy.get('#radio-buttons').find("[type=radio]").eq(1).check()


    });

    it("Validate the states of radiobuttons", () => {
              
        cy.get('#radio-buttons').find("[type=radio]").first().check()
        cy.get('#radio-buttons').find("[type=radio]").eq(1).check()

        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='cabbage']").should('not.be.checked')
        cy.get("[value='pumpkin']").should('be.checked')

        cy.get("[value='lettuce']").check()
        cy.get("[value='lettuce']").should('be.checked')

        cy.get("[value='cabbage']").should('be.disabled')

     
      //  [value='pumpkin']
        
        
            });



   
} )