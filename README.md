# NishaCypressProject

This repository contains a scaffolded, TypeScript-based Cypress framework for automating https://automationexercise.com. The project is organized to be robust, easy to extend, and CI-ready (for Jenkins or other CI systems).

## What is included
- Cypress (TypeScript) test skeleton
- `cypress` directory with `e2e`, `support`, `fixtures` folders
- `cypress.config.ts` for configuration and environment support via `.env`
- `cypress/support/helpers.ts` utilities (wait, click, random data)
- `cypress/support/locators.ts` for CSS selectors (store all selectors here)
- `.gitignore` configured to exclude `node_modules`, `.env`, Cypress videos/screenshots

## Prerequisites
- Node.js (LTS recommended)
- npm (comes with Node.js)

## Quick setup

1. Install dev dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root (this file is ignored by Git).
Example `.env`:

```env
CYPRESS_BASE_URL=https://automationexercise.com
CYPRESS_USERNAME=your_email@example.com
CYPRESS_PASSWORD=your_password
```

3. Ensure `tsconfig.json` exists at the project root. A recommended minimal config is:

```json
{
	"compilerOptions": {
		"target": "ES6",
		"lib": ["es6", "dom"],
		"types": ["cypress"],
		"module": "commonjs",
		"esModuleInterop": true,
		"skipLibCheck": true,
		"forceConsistentCasingInFileNames": true,
		"outDir": "dist"
	},
	"include": ["cypress/**/*.ts"],
	"exclude": ["node_modules"]
}
```

## Run tests

- Open Cypress Test Runner (interactive):

```bash
npx cypress open
```

- Run tests in headless mode (CI friendly):

```bash
npx cypress run
```

## Folder structure (important files)

```
cypress/
	e2e/                # test specs (*.cy.ts)
	fixtures/           # test data
	support/
		helpers.ts        # reusable helper functions (wait, click, utils)
		locators.ts       # all CSS selectors used by tests
		commands.ts       # custom Cypress commands (if any)
cypress.config.ts    # Cypress configuration and env wiring
tsconfig.json        # TypeScript configuration
package.json         # devDependencies and scripts
.env                 # local environment variables (ignored)
```

## Helpers and locators
- Keep small, pure functions in `cypress/support/helpers.ts` (recommended). Example helpers: `waitForElementToBeClickable`, `clickOnElement`, `generateRandomEmail`.
- Store all CSS selectors in `cypress/support/locators.ts` as exported constants. Import these in tests and helpers so selectors remain in a single place.

## Writing tests (TypeScript)
- Create specs under `cypress/e2e` with a `.cy.ts` extension.
- Use `beforeEach` for common setup (for example: visit base URL and log in). Use `Cypress.env('username')` and `Cypress.env('password')` to read credentials.

Example:

```ts
describe('Smoke tests', () => {
	beforeEach(() => {
		cy.visit(Cypress.config('baseUrl'));
		// or: cy.visit(Cypress.env('BASE_URL')) depending on config
		// use helper/locator functions to log in
	});

	it('shows home page', () => {
		cy.url().should('include', '/');
	});
});
```

## CI/CD (Jenkins) notes
- Use `npx cypress run` in your CI pipeline to execute tests headlessly.
- Cache `node_modules` between runs to speed up builds.
- Store secrets (CYPRESS_USERNAME, CYPRESS_PASSWORD) in your CI credentials store and inject them as environment variables during the build.
- Optionally, collect `cypress/videos` and `cypress/screenshots` as build artifacts on failure.

## Troubleshooting
- "No tsconfig.json found" — ensure `tsconfig.json` is at the project root.
- "Cannot find module 'cypress'" — run `npm install` to install dev dependencies.
- TypeScript parsing errors — verify `include` in `tsconfig.json` matches `cypress/**/*.ts` and that test/support files have `.ts` extensions.

---

If you want, I can also:
- scaffold a `cypress/support/locators.ts` file with recommended selectors for the login flow,
- add a sample `cypress/e2e/smoke.cy.ts` that uses helpers and locators,
- or create a minimal `tsconfig.json` and update `package.json` scripts.

Happy to continue — tell me which of the above you'd like next.
