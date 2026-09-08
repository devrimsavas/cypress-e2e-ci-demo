# Cypress E2E Testing Practice

A small Express login application used to practice end-to-end testing with Cypress — including a CI pipeline that runs the tests automatically in GitHub Actions against a live server.

## 🚀 What this demonstrates

- **Real E2E test scenarios**, not just smoke tests:
  - Successful login shows a confirmation message
  - Wrong username/password shows an error message
  - Submitting empty fields shows an error message
  - Successful login redirects to a protected admin page and verifies its content
- **CI-integrated E2E testing** — a GitHub Actions workflow starts the Express server, waits for it to become available (`wait-on`), and then runs the full Cypress suite headlessly against it on every push and pull request
- A minimal Express app (login form + protected admin page) purpose-built as a testable target

## 🛠 Tech Stack

- Node.js, Express
- Cypress (E2E testing)
- GitHub Actions (CI)

## 📂 Project Structure

```
cypress-test-simple/
├── app.js                     — Express app: login endpoint + admin page
├── public/
│   ├── index.html               — login form
│   └── admin.html                — protected admin page
├── cypress/
│   ├── e2e/
│   │   ├── login_test.cy.js        — login success/failure/empty-field scenarios
│   │   └── admin_redirect.cy.js     — verifies redirect + admin page content on success
│   ├── fixtures/
│   └── support/
├── cypress.config.js
└── .github/workflows/
    └── node.js.yml              — CI: install → start server → wait-on → cypress run
```

## ▶️ Getting Started

### Run locally

```bash
npm install
npm start
```
The app runs at `http://localhost:3000`.

### Run the Cypress tests

In a separate terminal, with the server running:
```bash
npx cypress open   # interactive test runner
# or
npx cypress run    # headless, same as CI
```

### CI

Every push and pull request to `main` triggers the GitHub Actions workflow, which starts the server and runs the full Cypress suite headlessly — see the Actions tab for results.

## 📝 Notes

This is a learning project focused specifically on getting E2E testing working end-to-end in CI — not just writing Cypress tests locally, but making sure they run reliably against a freshly started server in an automated pipeline. It complements other testing practice (Jest + Supertest for API-level tests in [SnapShop](https://github.com/devrimsavas/ecommerce-platform)) with browser-level, user-flow testing.
