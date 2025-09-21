//describe
describe("Admin Redirect", () => {
  it("must re-direct admin page with successfull entry", () => {
    //enter first
    cy.visit("http://localhost:3000/");
    //fill fields
    cy.get("#nameinput").type("devrim");
    cy.get("#passinput").type("12345");
    cy.get("#submitformbutton").click();

    //result
    cy.url().should("include", "/adminpage");
    cy.contains("h1", "Admin Page").should("be.visible");
  });

  it("")
});
