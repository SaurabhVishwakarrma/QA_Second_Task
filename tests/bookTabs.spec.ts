import { test, expect } from "../fixtures/baseFixtures";
import { BrowserWIndowsPage } from "../pages/bookTabs";
import { Page } from "@playwright/test";


test.describe("Browser Windows - Tab & Window Handling", () => {

  test.beforeEach(async ({ page, context,browserWindowsPage }) => {

    await browserWindowsPage.goto();
    await browserWindowsPage.verifyPageIsVisible();
  });

  test("TC_001: New Tab button opens a new tab", async ({ context,browserWindowsPage }) => {
    const pagesBefore = context.pages().length;
    const childTab: Page = await browserWindowsPage.clickNewTab();
    expect(context.pages().length).toBe(pagesBefore + 1);
    await childTab.close();

  });


  test("TC_002: New tab displays 'This is a sample page'", async ({browserWindowsPage}) => {
    const childTab: Page = await browserWindowsPage.clickNewTab();
    const headingText = await browserWindowsPage.PageHeadingText(childTab);
    expect(headingText).toBe("This is a sample page");
    await childTab.close();
  });


  test("TC_003: Close child tab and switch back to parent", async ({
    page,
    context,
    browserWindowsPage
  }) => {
    const childTab: Page = await browserWindowsPage.clickNewTab();
    expect(context.pages().length).toBe(2);
    await childTab.close();
    expect(context.pages().length).toBe(1);
    expect(page.url()).toContain("browser-windows");
    await browserWindowsPage.verifyPageIsVisible();
  });


  test("TC_004: New Window Message opens with expected message text", async ({browserWindowsPage}) => {
    const messageWindow: Page = await browserWindowsPage.clickNewWindowMessage();
    const bodyText = await messageWindow.locator("body").innerText();
    expect(bodyText).toContain(
      "Knowledge increases by sharing but not by saving",
    );
    await messageWindow.close();
  });
});


