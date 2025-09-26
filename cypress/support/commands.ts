import { loginLocators } from './locators/loginLocators';

Cypress.Commands.add("login", (email: string, password: string) => {
  cy.get(loginLocators.loginLink).click();
  cy.get(loginLocators.emailInput).type(email);
  cy.get(loginLocators.passwordInput).type(password);
  cy.get(loginLocators.loginButton).click();
});
