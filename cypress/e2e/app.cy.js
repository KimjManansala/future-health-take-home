describe('Navigation', () => {
    it('should navigate to the Client Portal', async () => {
        // Start from the index page
        cy.visit('/navigation')
        cy.get('#client-portal-link').click()
        cy.url().should('include', '/')
        cy.get('.card-header').contains('My Tickets')
    });
    it('should navigate to the Admin Portal', async () => {
        // Start from the index page
        cy.visit('/navigation')
        cy.get('#admin-portal-link').click()
        cy.url().should('include', '/admin_portal')
        cy.get('.card-header').contains('All Tickets')
    })
})
