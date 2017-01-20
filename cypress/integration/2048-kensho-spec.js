describe('2048-kensho', function () {
  beforeEach(function () {
    cy.visit('/')
  })
  it('has 2048 title', function () {
    cy.title().should('include', '2048')
  })
  it('has header', () => {
    cy.get('h1.title').should('be.visible')
      .contains('kensho')
  })
  it('starts with 3 tiles', () => {
    cy.get('.tile-container')
      .find('.tile')
      .should('have.length', 3)
  })
  it('can play a couple of moves', () => {
    cy.left()
    cy.right()
    cy.up()
    cy.down()
  })
})
