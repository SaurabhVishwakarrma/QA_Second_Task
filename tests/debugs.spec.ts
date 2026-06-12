import test, { expect } from "@playwright/test";

test.describe("Simulating Failures", () => {

  test.beforeEach(async ({ page }) => {
await page.goto("https://demoqa.com/books");
   
  });

  test("TC_001: Wrong_Locator", async ({ page }) => {
  await page.locator("#Wrong-Button").click(); 

  })

  test("TC_002: Assertion Failure", async ({page }) => {
    await expect(page).toHaveTitle("Saurabh")
  })

  test("TC_003 - Strict Mode Failure",async ({page}) => {
    await page.locator('a').click();
  })
    test("TC_004 - Navigation Failure", async ({ page }) => {
      await page.goto("https://wrong--demoqa.com")
    });
      test("TC_005 - Page Closed", async ({ page }) => {
        await page.close()
        await page.locator("#login").click()
      });


})

test.describe("Timeouts", () => {


test(" TC_006 - Expect Timeout", async ({ page }) => {
  await page.goto("https://demoqa.com/books");

  await expect(page.locator("#searchBoxx")).toBeVisible({
    timeout: 2000,
  });
});
test(" TC_007 - Action Timeout", async ({ page }) => {
  await page.goto("https://demoqa.com/books");

  await page.locator("#searchBoxx").click({
    timeout: 2000,
  });
});
test("  TC_008 - Navigation Timeout", async ({ page }) => {
  await page.goto("https://demoqa.com/books", {
    timeout: 1,
  });
});
});
