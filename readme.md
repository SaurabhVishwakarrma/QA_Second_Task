Playwright Advanced Training Assignment



Overview



This project contains the implementation of the QA Fresher Training Task – Part 2 (Advanced Playwright with TypeScript).



The objective of this assignment is to demonstrate advanced Playwright concepts including:



- Multiple Browser Tabs and Window Handling

- Network Request Interception and Mocking

- Custom Playwright Fixtures

- Framework Reusability

- Debugging and Failure Analysis

- Playwright Reports and Trace Viewer Usage



---



Tech Stack



- Playwright

- TypeScript







Day 1 - Multiple Tabs and Windows



Application



https://demoqa.com/browser-windows



Implemented Test Cases



TC_001 Verify New Tab button opens a new tab



Objective:



- Click New Tab button

- Verify a new tab is opened



Validation:



- Number of pages in browser context increases by one



---



TC_002 Verify content of newly opened tab



Objective:



- Open new tab

- Verify page heading



Expected Result:



This is a sample page



---



TC_003 Close child tab and switch back to parent



Objective:



- Open child tab

- Close child tab

- Verify user returns to parent page



Validation:



- Parent page remains accessible



---



TC_004 Verify New Window Message functionality



Objective:



- Open message window

- Verify displayed message



Expected Result:



Knowledge increases by sharing but not by saving



---



Day 1 - Network Mocking



Application



https://demoqa.com/books



Objective



Demonstrate request interception and response mocking using Playwright.



---



TC_005 Mock Books API with Custom Data



Actions:



- Intercept Books API

- Return custom JSON response

- Verify mocked books appear on UI



Validation:



Playwright Testing

Learning TypeScript



are displayed.



---



TC_006 Mock Empty Books Response



Actions:



- Intercept Books API

- Return empty books array



Validation:



- No books displayed in UI



---



TC_007 Delay API Response



Actions:



- Delay Books API response

- Verify application handles delayed network response



Validation:



- Books are displayed after response completion



---



Day 2 - Playwright Fixtures



Objective



Improve framework maintainability and reusability using custom fixtures.



---



Page Object Fixture



Implemented fixture:



browserWindowsPage



Purpose:



- Provide BrowserWindowsPage object automatically to tests

- Remove repetitive object creation



Example:



test(

  "Fixture Example",

  async ({ browserWindowsPage }) => {



    await browserWindowsPage.goto();



  }

);



---



Utility Fixture



Implemented fixture:



dateUtil



Purpose:



- Demonstrate non-page-object fixture creation

- Reusable utility class across tests






test(

  "Utility Fixture Example",

  async ({ dateUtil }) => {



    console.log(

      dateUtil.getCurrentDate()

    );



  }

);



---



Day 2 - Reports and Debugging



Failure Categories



1. Wrong Locator



Description:



- Invalid locator used



Example:



#searchBoxx



Root Cause:



- Locator does not exist



---



2. Assertion Failure



Description:



- Expected value differs from actual value



Root Cause:



- Incorrect assertion



---



3. Strict Mode Violation



Description:



- Locator matches multiple elements



Example:



page.locator("a")



Root Cause:



- Locator too generic



---



4. Navigation Failure



Description:



- Invalid URL navigation



Root Cause:



- Incorrect application URL



---



5. Page Closed



Description:



- Interaction attempted after page closure



Root Cause:



- Page object no longer available



---



Timeout Categories



1. Expect Timeout



Description:



- Element never becomes visible within configured timeout



Root Cause:



- Element not present



---



2. Action Timeout



Description:



- Click action unable to locate target element



Root Cause:



- Locator not found



---



3. Navigation Timeout



Description:



- Navigation exceeds configured timeout



Root Cause:



- Page load takes longer than allowed



---



Debugging Tools Used



HTML Report



Generate:



npx playwright show-report



Purpose:



- Analyze test execution results

- View passed and failed tests

- Inspect error logs



---



Trace Viewer



Enabled through:



trace: "on"



Purpose:



- View execution timeline



- Review DOM snapshots



---



Playwright Inspector



Run:



npx playwright test --debug



Purpose:



- Step-by-step execution

- Locator inspection

- Live debugging



---



Screenshots



Configuration:



screenshot: "only-on-failure"



Purpose:



- Capture failure state



---



Videos



Configuration:



video: "retain-on-failure"



Purpose:



- Analyze test execution visually



---



Running Tests



Run all tests:



npx playwright test



Run Browser Windows tests:



npx playwright test bookTabs.spec.ts



Run Network Mocking tests:



npx playwright test networkMocking.spec.ts



Run Fixture tests:



npx playwright test fixtureTests.spec.ts



Run Debugging tests:



npx playwright test debugs.spec.ts



---



Learning Outcomes



Through this assignment the following Playwright concepts were practiced:



- Multi-tab handling

- Window switching

- Network interception

- API mocking

- Custom fixtures

- Utility fixtures

- Debugging techniques

- Failure analysis

- Timeout handling

- HTML reporting

- Trace analysis

- Framework maintainability



---