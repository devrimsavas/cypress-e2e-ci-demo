//describe
describe("Login Form", () => {
  it("it must show okay boss message with successfull entry", () => {
    //what to do
    // enter site
    cy.visit("http://localhost:3000");
    // get fields
    cy.get("#nameinput").type("devrim");
    cy.get("#passinput").type("12345");
    cy.get("#submitformbutton").click();

    //result
    cy.get("#message").should("be.visible").and("have.text", "OKAY BOSS");
  });

  it("it should show Wrong Name or password ", () => {
    cy.visit("http://localhost:3000");

    cy.get("#nameinput").type("selim");
    cy.get("#passinput").type("0000");
    cy.get("#submitformbutton").click();

    cy.get("#message").should("be.visible").and("have.text", "Wrong");
  });

  it("it should show Wrong ",()=> {
    cy.visit("http://localhost:3000");
    cy.get("#nameinput").clear();
    cy.get("#passinput").clear();
    cy.get("#submitformbutton").click();
    cy.get("#message").should("be.visible").and("have.text", "Wrong");
    
  })
});
