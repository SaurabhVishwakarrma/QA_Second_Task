import { test, expect } from "../fixtures/baseFixtures";
import { routes } from "../routes/routes";

test.describe("Simulating Failures", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/books");
  });

  test("TC_001: Wrong_Locator", async ({ page, debugPage }) => {
    await debugPage.wrongLocatorclick();
  });

  test("TC_002: Assertion Failure", async ({ page, debugPage }) => {
    await debugPage.checkTitle();
  });

  test("TC_003 - Strict Mode Failure", async ({ page, debugPage }) => {
    await debugPage.strictLocatorClick();
  });
  test("TC_004 - Navigation Failure", async ({ page, debugPage }) => {
    await debugPage.navigate(routes.wrongurl);
  });
  test("TC_005 - Page Closed", async ({ page, debugPage }) => {
    await page.close();
    await debugPage.loginclick();
  });
});

test.describe("Timeouts", () => {
  test(" TC_006 - Expect Timeout", async ({ page, debugPage }) => {
    await page.goto(routes.site);

    await debugPage.searchboxIsVisible();
  });
  test(" TC_007 - Action Timeout", async ({ page, debugPage }) => {
    await page.goto(routes.site);

    await debugPage.clickSearchBox();
  });
  test("  TC_008 - Navigation Timeout", async ({ page, debugPage }) => {
    await debugPage.navigationTimeout();
  });
});
