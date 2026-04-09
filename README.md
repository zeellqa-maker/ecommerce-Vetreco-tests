# Playwright TypeScript Framework

## Table of Contents
1. [Introduction](#introduction)
2. [Folder Structure](#folder-structure)
3. [Project Overview](#project-overview)
4. [Naming Conventions](#naming-conventions)
5. [Installation Commands](#installation-commands)
6. [Run Tests for Different Products](#run-tests-for-different-products)
7. [Playwright Configuration](#playwright-configuration)
8. [Reporting Configuration](#reporting-configuration)
9. [Fetching Credentials from Vault](#fetch-the-credentials-from-the-vault)
10. [Accessibility Testing](#accessibility-testing)
11. [Test Data Loading and Email Entry](#test-data-loading-and-email-entry-explanation)
12. [Utility Helpers]
13. [Why We Are Using Tags in Testcases]
14. [Best Practices]
15. [Branching Strategy]

---
## Introduction
This project is a **Playwright TypeScript** framework designed for automated web application testing. It supports robust features like cross-browser testing, reusable utilities, modular test structure, detailed reporting, and the flexibility to accept different types of locators like **CSS** and **XPath** to ensure ease of use and compatibility with diverse scenarios.

---
## Folder Structure**
COLPAL_AUTOMATION/
├── .github/
│   └── workflows/           # GitHub Actions workflows for CI/CD
├── node_modules/            # Auto-generated folder for dependencies
├── playwright-report/       # Folder for Playwright's test execution reports
├── Products/                # Main folder for product-specific modules
│   ├── COPB2B/              # Module for COPB2B
│   │   ├── locators/        # Locator files for COPB2B
│   │   ├── pages/           # POM classes for COPB2B
│   │   ├── tests/           # Test cases for COPB2B       
│   ├── GABA/                # Module for GABA
│   │   ├── locators/        # Locator files for GABA
│   │   ├── pages/           # POM classes for GABA
│   │   ├── tests/           # Test cases for GABA
│   └── PCASKIN/             # Module for PCASKIN
│       ├── locators/        # Locator files for PCASKIN
│       ├── pages/           # POM classes for PCASKIN
│       ├── tests/           # Test cases for PCASKIN
├── reports/                 # Folder to store generated test reports
├── test-results/            # Test result artifacts and snapshots
├── testdata/                # Shared test data folder (copb2b,pcaskin,gaba,common)
├── utils/                   # Utility/helper functions
│   ├── commonHelper.ts      # Common reusable helper functions
│   ├── elementHelper.ts     # Functions to interact with UI elements
|   |── browserHelper.ts     # Functions to interact with browser 
│   └── verificationHelper.ts# Functions to verify test assertions for both soft and hard
├── .gitignore               # Git ignore file
├── env.js                   # Environment-specific configuration
├── env.txt                  # Environment variables
├── package.json             # Node.js dependencies and script configuration
├── package-lock.json        # Auto-generated file to lock dependency versions
├── playwright.config.ts     # Playwright configuration file
├── README.md                # Project documentation
└── updateProductTestDataWithEnv.ts # Script for valult integration with testdata

---
### Project Overview

## Highlights:
1. **Products**
   - **COPB2B-specific modules**: Organized into `locators`, `pages`, and `tests`.
   - **GABA and SKINCARE-specific modules**: Organized into `locators`, `pages`, and `tests`.
   - **SKINCARE-specific modules**: Organized into `locators`, `pages`, and `tests`. 
2. **Utils**: Common helpers for elements, verification, browser helper, and common helper functions.
3. **Reports**: Includes Playwright reports and custom reporting (if applicable).
4. **Config file**: Playwright configuration and TypeScript settings are located at the root.
5. **Test Data**: Contains test data files for all three products, storing relevant test data.
6. **env.js**: Includes URLs for all environments, used for launching the application accordingly.
7. **updateProductTestDataWithEnv.ts**: Contains logic for integrating vault data.
8. **github/**: GitHub Actions workflows for CI/CD.
9. **testresult/**: Test result artifacts and snapshots.
10. **playwright-report/**: Folder for Playwright's test execution reports.

---
## Naming Convention
### 1. Products: 
All product names must be in **uppercase**.  
Example: `COPB2B`, `GABA`, `SKINCARE`
### 2. Locators and Page Files:
- Use **PascalCase** for naming locator files and page object files.  
Example:  
  - Locator File: `LoginPageLocators.ts`  
  - Page Object File: `LoginPage.ts`
### 3. Test Case Files:
- Organize test cases **module-wise** in folders.  
- Use **camelCase** for naming test case files inside their respective module folders.  
Example:  
  - Folder: `tests/login/`  
    - Test Case File: `loginTest.ts`   
  - Folder: `tests/cart/`   
    - Test Case File: `addToCartTest.ts`
---
## Installation Commands
- **Initialize Node.js Project**  
  `npm init -y`  
  Initializes a new Node.js project and creates a `package.json` file.
- **Install Playwright**  
  `npm install @playwright/test`  
  Installs Playwright and its dependencies.
- **Check Installed Version**  
  `npx playwright --version`  
  Checks the installed version of Playwright.
- **Install Browser Binaries**  
  `npx playwright install`  
  Installs the necessary browser binaries (Chromium, Firefox, WebKit).
---
### run-tests-for-different-products**
### **Run All Tests for COPB2B**
- **English - Chrome**:  
  `$env:PROJECT="copb2b-en-chrome"; npx playwright test`
- **English - Edge**:  
  `$env:PROJECT="copb2b-en-edge"; npx playwright test`
- **English - firefox**:  
  `$env:PROJECT="copb2b-en-firefox"; npx playwright test`
- **English - Environment-wise (Production, Staging)**:
 `$env:PROJECT="copb2b-en-chrome-production"; npx playwright test`
- **English - tag-wise (cart,homepage)**:
  `$env:PROJECT="copb2b-en-chrome-staging-cart"; npx playwright test`
- **Run Specific Files in Cart:**
  To run a specific test file within the cart (e.g., `emptyCart.test.ts`, `ProductAddition.test.ts`),
  `$env:PROJECT="copb2b-en-chrome"; npx playwright test emptyCart.test.ts`
-**Run on a mobile device with a specific configuration for iPhone 11:** (Note: The mobile device configuration is part of a set of predefined devices in mobileDevice.js)
`$env:PROJECT="copb2b-en-mobile.iphone11"; npx playwright test`

### **Run All Tests for GABA**
- **French - Chrome**:  
  `$env:PROJECT="gaba-fr-chrome"; npx playwright test`
- **French - Edge**:  
  `$env:PROJECT="gaba-fr-edge"; npx playwright test`
- **French - firefox**:  
  `$env:PROJECT="gaba-fr-firefox"; npx playwright test`
- **German - Chrome**:  
  `$env:PROJECT="gaba-de-chrome"; npx playwright test`
- **German - Edge**:  
  `$env:PROJECT="gaba-de-edge"; npx playwright test`
- **German - firefox**:  
  `$env:PROJECT="gaba-de-firefox"; npx playwright test`
- **German - Environment-wise (Production, Staging)**:
 `$env:PROJECT="gaba-de-chrome-staging"; npx playwright test`
- **German - tag-wise (cart,homepage)**:
  $env:PROJECT="gaba-de-chrome-staging-cart"; npx playwright test 
- **french - Environment-wise (Production, Staging)**:
 `$env:PROJECT="gaba-fr-chrome-staging"; npx playwright test`
- **french - tag-wise (cart,homepage)**:
  `$env:PROJECT="gaba-fr-chrome-staging-cart"; npx playwright test`
--**French/german :Run on a mobile device with a specific configuration for iPhone 11:** (Note:The mobile device configuration is part of a set of predefined devices in mobileDevice.js)
`$env:PROJECT="gaba-fr-mobile.iphone11"; npx playwright test` 
`$env:PROJECT="gaba-de-mobile.iphone11"; npx playwright test`

### **Run All Tests for Skincare**
- **English - Chrome**:  
  `$env:PROJECT="pcaskin-en-chrome"; npx playwright test`
- **English - Edge**:  
  `$env:PROJECT="pcaskin-en-edge"; npx playwright test`
- **English - firefox**:  
  `$env:PROJECT="pcaskin-en-firefox"; npx playwright test`
- **English - Environment-wise (Production, Staging)**:
  `$env:PROJECT="pcaskin-en-chrome-staging"; npx playwright test`
- **English -tag-wise (cart,homepage)**:
  `$env:PROJECT="pcaskin-en-chrome-staging-cart"; npx playwright test`
- **Run Specific Files in Cart:**
  To run a specific test file within the cart (e.g., `emptyCart.test.ts`, `ProductAddition.test.ts`),
 `$env:PROJECT="pcaskin-en-chrome"; npx playwright test emptyCart.test.ts`
-**Run on a mobile device with a specific configuration for iPhone 11:** (Note: The mobile device configuration is part of a set of predefined devices in mobileDevice.js)
`$env:PROJECT="pcaskin-en-mobile.iphone11"; npx playwright test`
---
### Playwright Configuration

## Overview  
The configuration dynamically adjusts test execution based on the `PROJECT` environment variable, which specifies the product, language, browser, environment, and tags for filtering test cases.

## Environment Variables in `playwright.config` file
- **`PROJECT`**: Specifies the product, language, and browser combination for the tests.  
  Example: `copb2b-en-chrome-staging-cart`  
  - `copb2b`: Product (e.g., COPB2B, GABA, SKINCARE)  
  - `en`: Language code (e.g., en, fr, de)  
  - `chrome`: Browser (e.g., chrome, firefox, edge)  
  - `staging`: Environment (e.g., staging, production)  
  - `cart`: Tag (e.g., regression, cart)  

## **workers**
The `workers` configuration defines the number of parallel test workers.

## **Action Timeout**
The default `actionTimeout` in Playwright is typically 0 (no timeout). Setting a value like `30000` ensures that actions are bounded by a reasonable timeout.

### Key Use Cases:
- Waiting for UI interactions in slower environments.
- Handling pages with dynamic content loading.
- Preventing indefinite waits during test execution.

---

### Reporting Configuration

The reporting setup used in the Playwright framework, including various output formats like JSON, HTML, list, and JUnit. The configuration is designed to generate detailed and organized test reports for multiple use cases.

### **1. Reporter Configuration**
The following configuration is added in the `playwright.config.ts` file under the `reporter` property:
reporter: [
    ['list'],  
    ['json', { outputFile: `reports/test-results-${product}-${browser}.json` }],
    ['html', { outputFolder: './reporter/html', open: 'never' }],
],

---
### Fetch the Credentials from the Vault

In the project, we store key-value pairs in a secure vault. The logic is implemented to load all the key-value pairs from the vault before any tests start. The credentials are passed in the following structure:

## Credentials Object
{
  "Credentials": {
    "email": "{{copB2BValidEmail}}",
    "Password": "{{copB2BValidPassword}}",
    "userName": "Hi Testim QA Testim QA!",
    "imprintUserName": "{{copB2BImprintUserName}}",
    "imprintPassword": "{{copB2BImprintPassword}}",
    "signout": "Sign Out",
    "shortPassword": "Testim"
  }
}

## Logic Implementation
The credentials are dynamically loaded from the vault in the `updateProductTestDataWithEnv` logic. This approach ensures that credentials for different environments can be managed securely without being hardcoded in the project files. It provides flexibility, allowing tests to run with the correct credentials according to the environment.
## Flow:
1. **Credentials Retrieval:** Credentials are fetched from the vault.
2. **Key-Value Pair Injection:** The retrieved key-value pairs are injected into the test environment, updating the necessary variables.
3. **Test Execution:** The credentials are used during the test execution to authenticate users or perform specific actions required by the tests.

---

# Accessibility Testing

### Using the AQA capture accessibility tool
In order to do accessibility testing we are using UseableNet's AQA accessibility API.  
You will need to download the AQA capture plugin and add it to your project if it's not there already.  
It can be found here: https://help.usablenet.com/9.0/aqa-wa/Capture/Plugins.htm      
You will need the AQA API key found in vault under teams/dsq-qa-automation/Accessibility/  
The steps to run an accessibility test for your product are as follows:
  1. Create a suite on the AQA suite's page at https://aqa.usablenet.com/#/audit/colgate/suites/ongoing
  2. Add the AQA capture tool to the browser you are launching with a custom browser context
  3. Initialize the AQA page capture object using the page object, APIContextRequest object, the suite ID and AQA api key
  4. Navigate to the site you want to test
  5. Navigate to each page you want to test one by one and do a snapshot on each using the AQA capture object
  6. Upload the zip file of snapshots to the AQA suite you created in step 1
  7. Use the accessibility helper to grab the flow ID from your newly created flow
  8. Use the accessibility helper to create a new accessibility test with the flow ID
  9. Use the accessibility helper to get the test ID for the newly created test
  10. Use the accessibility helper to get the results from the test
  11. Extract the amount of failures from the results into a variable
  12. Check if that number of failures meets your critieria for success 


### Example accessibility testing code  

Imports
```javascript
import { test as base, chromium, type BrowserContext, expect } from '@playwright/test';
import * as accessbilityHelper from '../accessibility_helper/accessibilityHelper.ts';
 ```

 Browser Context
```javascript
const pathToExtension = "{PATH FROM YOUR TEST}/AQAPageCatpure/extension";
export const test = base.extend<{
  context: BrowserContext;
}>({
  context: async ({}, use) => {
    const context = await chromium.launchPersistentContext('', {
      headless: true,
      args: [`--disable-extensions-except=${pathToExtension}`, `--load-extension=${pathToExtension}`],
      channel: "chromium",
    });
    await use(context);
    await context.close();
  },
});
```

Test
```javascript
test('Accessibility API', async ({  page, request }) => {
  test.setTimeout(600_000)
  const aqaPageCapture = await accessbilityHelper.initAQAPageCatpure(page, request, (YOUR SUITE ID), (YOUR APIKEY) )
  await page.goto('https://dev-zz.hillsvetshop.com/');
  await aqaPageCapture.createFlow({
    name: 'Colgate Site',
    description: 'Test Hills vet site'
  });
  await page.locator("input[id='PasswordForm-Password']").fill("hvd")
  await page.locator("button[id='PasswordForm-Commit']").click()
  await page.waitForURL("https://dev-zz.hillsvetshop.com/")
  await page.locator("button[id='truste-consent-button']").click()
  await aqaPageCapture.doSnapshot('Home Page');
  await page.locator("button[class*='flex items-center rounded']").click()
  await page.getByText("About").first().click()
  await page.waitForURL("https://dev-zz.hillsvetshop.com/pages/about-us")
  await aqaPageCapture.doSnapshot('About Us Page')
  await page.locator("button[class*='flex items-center rounded']").click()
  await page.getByText("Frequently Asked Questions").first().click()
  await page.waitForURL("https://dev-zz.hillsvetshop.com/pages/frequently-asked-questions")
  await aqaPageCapture.doSnapshot("FAQ Page")
  await aqaPageCapture.uploadZip();
  const flowId = await accessbilityHelper.getFlowID(request, (YOUR SUITE ID), 5000, (API KEY))
  await accessbilityHelper.createTest(request, (YOUR SUITE ID), flowId, (API KEY))
  const testID = await accessbilityHelper.getTestID(request, (YOUR SUITE ID), 10000, (API KEY))
  const results = await accessbilityHelper.getTestResults(request, testID, (API KEY))
  const failed = results["review"]["rules"]["failed"]
  expect(failed).toBe(0)
});
```

---

## Test Data Loading and Email Entry Explanation

1. **Loading Test Data:**
   The function `loadAndReplaceTestData` is imported from the `updateProductTestDataWithEnv` module. It is used to load test data from a specified JSON file (`copb2b.testdata.json`). This file contains the necessary credentials and other test-related information.
   
   ```typescript
   import { loadAndReplaceTestData } from '../../../../updateProductTestDataWithEnv';
   const testData = loadAndReplaceTestData('copb2b.testdata.json');
2. **Using Loaded Test Data**: 
   Once the test data is loaded, it is accessed through the testData object. In the test, the email stored in the Credentials.email field of the loaded JSON data is used to enter the email address in the sign-in form.

```typescript
   await test.step('step 4: click on Email Text Box', async () => {
    await SignInAction.enterEmail(page, testData.Credentails.email);
});

---
## Utility Helpers
- **`commonHelper.ts`**: Contains general-purpose utility functions (e.g., date formatting, string manipulation).
- **`elementHelper.ts`**: Focuses on element-specific operations like clicking, typing, and waiting for elements.
- **`verificationHelper.ts`**: Focuses on verification operations like `isElementDisplayed`, `isClickable`.
- **`browserHelper.ts`**: Contains browser-related utilities (e.g., handling browser windows, managing sessions).

## Using Utility Helpers for Product-Specific Methods
In a modular test framework, we use utility helpers for common actions (like hover, click, wait) to avoid code duplication. For each product, we create specific methods (e.g., `hoverOverToothbrushMenu`, `hoverOverSoftMenu`) that utilize these common helper functions, providing flexibility while maintaining consistency.

---
## Why We Are Using Tags in Testcases
Tags are used in our test cases to improve organization, selective execution, and reporting. By tagging test cases, we can run specific subsets of tests, such as regression or smoke tests, as required.

**Example:**
test('Verify URL after clicking Colgate badge', { tags: ['@regression', '@homepage'] }, async ({ page }) => {
    await test.step('Step 1: Click on URL', async () => {
    });
});

---
### Branching Strategy**
## Template Branch for New Projects
The `template` branch serves as the starting point for initiating new projects. Always clone from this branch to begin fresh projects.
## Main Branch for Stable Code
The `main` branch contains all stable code, If you need stable code for development or testing, ensure you are working from the `main` branch.
## Workflow Steps for Main Branch for Stable Code

1. **Switch to the Main Branch**  
   Ensure you are on the `main` branch before starting your work:  
   git checkout main

2. **Pull the Latest Updates from the Main Branch**  
   Fetch and merge the latest changes from the remote `main` branch:  
   git pull origin main

3. **Create a New Branch for Your Work**  
   Create and switch to a new branch for your specific task or feature:  
   git checkout -b <new-branch-name>

## Branching Strategy for New Projects

### Template Branch for Initialization
The `template` branch will serve as the ideal starting point for initiating new projects. Clone from this branch to maintain consistency in your project structure.

### Cloning the Template
To start a new project, clone the repository and create a branch from the `template` 
git checkout template
git checkout -b <new-project-branch>

### Framework Updates
Any framework-related updates will be made directly to the `template` branch. This ensures that new projects always begin with the latest template, keeping everything up to date.

### Add Project-Specific Code
After creating the new branch from the template, add the project-specific code and proceed with development.

# GitHub Actions for Playwright Testing

Follow the steps below to set up and run Playwright testing with GitHub Actions:

1. **Go to GitHub**  
   Navigate to your repository on GitHub.

2. **Choose Actions**  
   From the repository page, click on the **Actions** tab.

3. **Select Playwright Testing Workflow**  
   Choose the **Playwright Testing** workflow.

4. **Run Workflow**  
   Click on **Run Workflow** on the top-right.

5. **Choose Branch Name**  
   Select the branch you want to run the workflow for.

6. **Git Reference**  
   Ensure the **Git Ref** is the same as the branch name you've selected.

7. **Choose Project**  
   Select the project associated with your tests.

8. **Choose Language**  
   Select the language for the tests

9. **Choose Browser**  
   Choose the browser for the tests (e.g., Chrome, Firefox, Webkit).

10. **Choose Tag (Optional)**  
    Tags are optional. If you provide a tag, the workflow will run tests for that specific tag. If no tag is provided, it will run all tests for the selected project.

# Adding a New Product to the Framework

To integrate a new product into the existing testing framework, follow the steps below. These instructions ensure that the new product is properly set up with all required components.

## Steps to Add a New Product in exsiting framework

### 1. Create a New Product Folder:
- Navigate to the `products` directory.
- Add a folder for your new product using the product name as the folder name.

### 2. Add Sub-Files:
Inside the newly created product folder, add the following sub-files:

1. **Locators**: Create a file to store all locators specific to the product.
2. **Pages**: Add a file to define page interactions for the product.
3. **Test Cases**: Include a file to write the test cases for the product.

### 3. Update the Environment Configuration (`env.js`)**: Add the product URL to the env.js file.
Use the product name as the key and include URLs for different environments (e.g., staging, production).
(e.g 
copb2b: {
    staging: 'https://uat.shop.colgateprofessional.com',
    production: '',
  }
)
### 4. Modify Existing Command for run the project
-(e.g $env:PROJECT="copb2b-en-chrome"; npx playwright test) updtaed to $env:PROJECT="newprojectname-en-chrome"; npx playwright test
Replace copb2b with your new product name.
The framework will fetch the URL for the specified product from env.js and execute the tests in Chrome.

# Setup and Merge Code from temprepo into newproject Repository

# Clone the blank newproject repository
git clone https://github.com/your-username/newproject.git
cd newproject

# Add temprepo as a remote repository and fetch its code
git remote add temprepo https://github.com/your-username/temprepo.git
git fetch temprepo

# Create and switch to a new branch based on temprepo's main branch
git checkout -b temp-code temprepo/main

# Merge the fetched code into the main branch
git checkout main
git merge --allow-unrelated-histories temp-code
 
# Clone the blank newproject repository
git clone https://github.com/your-username/newproject.git
cd newproject
 
# Add temprepo as a remote repository and fetch its code
git remote add temprepo https://github.com/your-username/temprepo.git
git fetch temprepo
 
# Create and switch to a new branch based on temprepo's main branch
git checkout -b temp-code temprepo/main
 
# Merge the fetched code into the main branch
git checkout main
git merge --allow-unrelated-histories temp-code
 
# Delete the temporary branch and remove the remote, then push changes to origin
git branch -d temp-code
git remote remove temprepo
git push origin main

For more information, follow this [Google Doc]('https://docs.google.com/document/d/1lv2fijUZ9vHKXgDS_yRGrWs0sE69oupZcnPwB4SnMy0/edit?tab=t.0#heading=h.30926acw477r').
