/**
 * Waits for an element to be visible and enabled (clickable).
 * @param selector - The selector for the element.
 */
export function waitForElementToBeClickable(selector: string) {
  cy.get(selector, { timeout: 10000 })
    .should('be.visible')
    .and('not.be.disabled');
}

/**
 * Clicks on an element after ensuring it is clickable.
 * @param selector - The selector for the element.
 */
export function clickOnElement(selector: string) {
  waitForElementToBeClickable(selector);
  cy.get(selector).click();
}

export const generateRandomEmail = (): string => {
  const timestamp = Date.now();
  return `testuser_${timestamp}@mail.com`;
};