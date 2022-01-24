/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should render home sections', () => {
    // visitar a página
    cy.visit('/')

    cy.get('.slick-active').within(() => {
      cy.findByRole('heading', { name: /cyberpunk 2077/i})
      cy.findByRole('link', { name: /buy now/i })
    })
  })
})
