/// <reference types="Cypress" />

describe('Landing page',() => {
  it('Hellow world',()=>{
    cy.visit('/')
    cy.contains('Hello World')
  })
})
