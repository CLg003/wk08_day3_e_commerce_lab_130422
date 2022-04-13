describe ("PingPong", () =>{
    beforeEach(() =>{
        cy.visit("http://localhost:3000");
    });

    it('should display a welcome message including the user name', () => {
        cy.get('header > p').should('contain', 'Welcome Máté');
    });

    it('should start with an empty basket', () => {
        cy.get('#basket > ol > li').should('have.length', 0);
    });

    it('should be able to add an item to the basket', () => {
        cy.get('.item-detail > button').click({ multiple: true });
        cy.get('#basket > ol > li').should('have.length', 6);
    });

    it('should be able to remove an item from the basket', () => {
        cy.get('.item-detail > button').click({ multiple: true });
        cy.get('.basket-item > button').click({ multiple: true });
        cy.get('#basket > ol > li').should('have.length', 0);
    })
} )