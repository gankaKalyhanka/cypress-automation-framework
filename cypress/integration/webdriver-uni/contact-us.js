import Homepage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/contact-us.PO'
/// <reference types = "Cypress" />


describe("Test Contact Us form via WebdriverUni", () => {
  Cypress.config('defaultCommandTimeout', 20000)
  const contact_Us_PO = new Contact_Us_PO()
  const homepage_PO = new Homepage_PO()

  beforeEach(function () {
    cy.fixture('example').then(function (data) {

      //  this.data = data;

      globalThis.data = data
    })
  })

  beforeEach(function () {

    homepage_PO.visitHomepage()
    cy.wait(3000)
    homepage_PO.clickOn_ContactUs_Button()
  //  cy.pause()
  })

  it("Should be able to submit a successful submission via contact us form", () => {

    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.title().should('include', 'WebDriver | Contact Us')
    cy.url().should('include', 'contactus')


    contact_Us_PO.contactForm_Submissiom(Cypress.env("first_name"), globalThis.data.first_name, globalThis.data.last_name, globalThis.data.email, "trololo", "h1", 'Thank You for your Message!')
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are requred", () => {

    const contact_Us_PO = new Contact_Us_PO()
    contact_Us_PO.contactForm_Submissiom(globalThis.data.first_name, globalThis.data.last_name, " ", "trololo", "body", 'Error: all fields are required')
    cy.webdriverUni_ContactForm_Submission(globalThis.data.first_name, globalThis.data.last_name, " ", "trololo", "body", 'Error: all fields are required')
  });
})