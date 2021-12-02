describe('Search page', () => {
  beforeEach(() => {
    cy.visit('/search', { timeout: 30000 });
  });
  it('lands on search page, click search button', () => {
    cy.getBySel('search-button').click();
    cy.wait(1000);
    cy.getBySel('launch-item-0').should('be.visible');
  });
});
