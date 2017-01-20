describe('2048-kensho', function(){
  beforeEach(function(){
    cy.visit('http://localhost:3000')
  })
  it('has 2048 title', function(){
    // https://on.cypress.io/api/title
    cy.title().should('include', '2048')
  })
})
