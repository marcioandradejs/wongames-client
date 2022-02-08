/// <reference path="../support/index.d.ts" />

describe('Wishlist', () => {
  it('should add and remove games from wishlist', () => {
    // acessar a página de wishlist não logado
    cy.visit('/wishlist')

    // redireciona e faz o signIn
    cy.signIn()

    // verificar se a wishlist está vazia
    cy.findByText(/Your wishlist is empty/i).should('exist')

    // pegar um jogo e adicionar na wishlist
    cy.getByDataCy('game-card').eq(0).within(() => {
      cy.findAllByLabelText(/add to wishlist/i).click()
    })

    // verificar se o jogo está lá
    cy.getByDataCy('wishlist').within(() => {
      cy.getByDataCy('game-card').should('have.length', 1)
    })

    // remover esse jogo
    cy.getByDataCy('wishlist').within(() => {
      cy.findAllByLabelText(/remove from wishlist/i).click()
    })

    // verificar se a lista está vazia
    cy.findByText(/Your wishlist is empty/i).should('exist')
  });
});
