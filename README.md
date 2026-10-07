# Selenium Web Automation

A web UI test automation framework built with **JavaScript and Selenium WebDriver**, following the **Page Object Model (POM)** design pattern.

The project automates user workflows on the **Demo Web Shop** application and is designed to be extended with additional test scenarios as the automation suite grows.

## Application Under Test

**Demo Web Shop:**
https://demowebshop.tricentis.com/

---

## Tech Stack

* **JavaScript** — Programming language
* **Selenium WebDriver** — Web UI automation
* **Node.js** — JavaScript runtime
* **npm** — Package management
* **Google Chrome** — Browser
* **Page Object Model (POM)** — Automation design pattern

---

## Project Structure

```text
shopWithSelenium/
│
├── page/
│   ├── base.js
│   ├── LoginPage.js
│   └── SignUpPage.js
│
├── test/
│   ├── LoginTest.js
│   └── SignUpTest.js
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

### Page Objects

#### `base.js`

The `BasePage` class provides common browser functionality used by the page objects.

Responsibilities include:

* Creating the Selenium WebDriver instance
* Configuring Chrome
* Opening URLs
* Maximizing the browser window
* Closing the browser

#### `LoginPage.js`

Contains the locators and reusable actions required for the Login workflow.

Handles:

* Login link
* Email field
* Password field
* Login button

Example methods include:

```javascript
clickLoginLink()
enterEmail()
enterPassword()
clickLoginBtn()
```

#### `SignUpPage.js`

Contains the locators and reusable actions required for the Registration workflow.

Handles:

* Registration link
* Gender selection
* First name
* Last name
* Email
* Password
* Confirm password
* Register button

---

## Automated Test Scenarios

### Login

The Login test currently performs the following workflow:

1. Open Demo Web Shop.
2. Navigate to the Login page.
3. Enter email address.
4. Enter password.
5. Click the Login button.
6. Close the browser.

Implemented in:

```text
test/LoginTest.js
```

### User Registration

The Registration test currently performs the following workflow:

1. Open Demo Web Shop.
2. Navigate to the Registration page.
3. Select gender.
4. Enter first name.
5. Enter last name.
6. Enter email address.
7. Enter password.
8. Confirm password.
9. Click the Register button.
10. Close the browser.

Implemented in:

```text
test/SignUpTest.js
```

> More test scenarios will be added as the automation framework is expanded.

---

## Framework Design

This project follows the **Page Object Model (POM)** architecture.

The framework separates:

| Component    | Responsibility                     |
| ------------ | ---------------------------------- |
| `BasePage`   | Common browser operations          |
| Page Objects | Locators and reusable page actions |
| Test Files   | Test execution flow                |

This approach helps keep test scripts clean, reusable, and easier to maintain.

For example, the Login test uses reusable methods from `LoginPage` rather than directly interacting with Selenium locators:

```javascript
await loginPage.clickLoginLink();
await loginPage.enterEmail('your-email@example.com');
await loginPage.enterPassword('your-password');
await loginPage.clickLoginBtn();
```

---

## Installation

### Prerequisites

Make sure the following are installed:

* [Node.js](https://nodejs.org/)
* npm
* Google Chrome

### Clone the Repository

```bash
git clone <repository-url>
cd shopWithSelenium
```

### Install Dependencies

If `package.json` is already included:

```bash
npm install
```

If Selenium WebDriver has not been installed:

```bash
npm install selenium-webdriver
```

---

## Running the Tests

### Run Login Test

```bash
node test/LoginTest.js
```

### Run Registration Test

```bash
node test/SignUpTest.js
```

### Run Both Tests

```bash
node test/LoginTest.js
node test/SignUpTest.js
```

---

## Browser Configuration

The framework currently uses **Google Chrome**.

The WebDriver is initialized using Selenium's Chrome browser configuration:

```javascript
this.driver = new Builder()
    .forBrowser(Browser.CHROME)
    .build();
```

Common browser operations are handled by `BasePage`.

### Open URL

```javascript
await this.driver.get(url);
```

### Maximize Browser

```javascript
await this.driver.manage().window().maximize();
```

### Close Browser

```javascript
await this.driver.quit();
```

---

## Current Limitations

The current version of the framework:

* Uses hard-coded test data.
* Primarily focuses on UI actions.
* Does not yet include comprehensive assertions.
* Currently uses Google Chrome.
* Does not yet include a dedicated test runner or reporting framework.

These areas can be improved as the automation suite develops.

---

## Future Enhancements

Planned improvements include:

* Add assertions and validation points
* Expand positive and negative test scenarios
* Add explicit waits
* Introduce test data management
* Add environment configuration
* Implement screenshot capture on test failure
* Add test reporting
* Add logging
* Support cross-browser testing
* Integrate a test runner such as Mocha
* Integrate CI/CD pipelines

---

## Learning Objectives

This project demonstrates practical experience with:

* Web UI automation
* Selenium WebDriver
* JavaScript-based test automation
* Page Object Model (POM)
* Reusable page actions
* Browser automation
* Test scenario implementation
* Automation framework organization

---

## Disclaimer

This project is created for **learning and test automation practice** using the publicly available Demo Web Shop application.

---


