import { generateRandomEmail } from "../../support/helpers";
import { registerLocators } from "../../support/locators/registerLocators";

describe('Register User', () => {
  it('Test Case 1: Register User', () => {
    cy.visit('/');
    cy.get(registerLocators.loginLink).click();

    const email = generateRandomEmail();

    cy.get(registerLocators.signupName).type('Nisha Tester');
    cy.get(registerLocators.signupEmail).type(email);
    cy.get(registerLocators.signupButton).click();
  });
});
