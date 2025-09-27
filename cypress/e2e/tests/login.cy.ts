describe("Login functionality", () => {
  beforeEach(() => {
    // Visit the baseUrl (defined in cypress.config.ts)
    cy.visit("/");
  });

  it("should login successfully with valid credentials", () => {
    // Use the custom login command
    cy.login(
      Cypress.env("username"),
      Cypress.env("password")
    );

    // Assertion - check if "Logged in as" is visible
    cy.contains("Logged in as").should("be.visible");
  });

  it("should show error for invalid credentials", () => {
    cy.login("fakeuser@example.com", "wrongpassword");

    // Assertion - check error message
    cy.get(".login-form p") // Adjust locator based on DOM
      .should("contain.text", "Your email or password is incorrect!");
  });
});
