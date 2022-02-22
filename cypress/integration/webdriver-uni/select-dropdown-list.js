/// <reference types = "Cypress" />


describe("Interact with dropdown lists via webdriveruni", () => {
    it("Select specific values via select dropdown list", () => {
cy.visit('https://webdriveruniversity.com')
cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

cy.get('#radio-buttons').find("[type=radio]").first().check()
cy.get('#radio-buttons').find("[type=radio]").eq(1).check()

cy.get("#dropdowm-menu-1").select('c#')
cy.get("#dropdowm-menu-2").select('testng').should('have.value', 'testng')
cy.get("#dropdowm-menu-3").select('JQuery').contains('Query')

cy.get("#dropdowm-menu-2").select('junit').should('have.value', 'junit')


    });

      
} )