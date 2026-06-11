import { test, expect, Page } from "@playwright/test";
import { BrowserWIndowsPage } from "../pages/bookTabs";


test.describe("Browser Windows - Tab & Window Handling", () => {
  let browserWindowsPage: BrowserWIndowsPage;

  test.beforeEach(async ({ page, context }) => {
    browserWindowsPage = new BrowserWIndowsPage(page, context);
    await browserWindowsPage.goto();
    await browserWindowsPage.verifyPageIsVisible();
  });


  test("TC_001: New Tab button opens a new tab", async ({ context }) => {
    const pagesBefore = context.pages().length;
    const childTab: Page = await browserWindowsPage.clickNewTab();
    expect(context.pages().length).toBe(pagesBefore + 1);
    await childTab.close();
  });


  test("TC_002: New tab displays 'This is a sample page'", async () => {
    const childTab: Page = await browserWindowsPage.clickNewTab();
    const headingText = await browserWindowsPage.PageHeadingText(childTab);
    expect(headingText).toBe("This is a sample page");
    await childTab.close();
  });


  test("TC_003: Close child tab and switch back to parent", async ({
    page,
    context,
  }) => {
    const childTab: Page = await browserWindowsPage.clickNewTab();
    expect(context.pages().length).toBe(2);
    await childTab.close();
    expect(context.pages().length).toBe(1);
    expect(page.url()).toContain("browser-windows");
    await browserWindowsPage.verifyPageIsVisible();
  });


  test("TC_004: New Window Message opens with expected message text", async () => {
    const messageWindow: Page = await browserWindowsPage.clickNewWindowMessage();
    const bodyText = await messageWindow.locator("body").innerText();
    expect(bodyText).toContain(
      "Knowledge increases by sharing but not by saving",
    );
    await messageWindow.close();
  });
});


