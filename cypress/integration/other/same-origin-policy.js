/// <reference types = "Cypress" />


describe("Cypress web security", () => {
    it("Validate visiting to different domains", () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.visit('https://automationteststore.com/')

    });

    it("Validate visiting to different domains with user actions", () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get("#automation-test-store").invoke('removeAttr', 'target').click()
            });
} )