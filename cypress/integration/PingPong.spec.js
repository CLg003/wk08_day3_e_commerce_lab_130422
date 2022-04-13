describe ("PingPong", () =>{
    beforeEach(() =>{
        cy.visit("http://localhost:3000");
    })

    it("should have a user name", () =>{
        cy.get("header > p").should("contain", "Welcome Máté");
    })

    it("")
} )