import { Page, Locator, expect } from "@playwright/test";
import { locators } from "../constants/locators";
import { routes } from "../routes/routes";

export class DebugPage {
  readonly page: Page;
  readonly wrongLocator: Locator;
  readonly strictLocator: Locator;
  readonly loginLocator: Locator;
  readonly searchbox: Locator;

  constructor(page: Page) {
    this.wrongLocator = page.locator("Wrong-Button");
    this.strictLocator = page.locator("a");
    this.loginLocator = page.locator("#login");
    this.searchbox = page.locator("#searchBoxx");
    this.page = page;
  }

  async wrongLocatorclick(): Promise<void> {
    await this.wrongLocator.click();
  }
  async checkTitle(): Promise<void> {
    await expect(this.page).toHaveTitle("Saurabh");
  }
  async strictLocatorClick(): Promise<void> {
    await this.strictLocator.click();
  }
  async navigate(expectedlink: string): Promise<void> {
    await this.page.goto(expectedlink);
  }
  async loginclick(): Promise<void> {
    await this.loginLocator.click();
  }
  async searchboxIsVisible(
    customTimeout: number = timeouts.assertion,
  ): Promise<void> {
    await expect(this.searchbox).toBeVisible({
      timeout: customTimeout,
    });
  }

  async clickSearchBox(customTimeout: number = timeouts.action): Promise<void> {
    await this.searchbox.click({ timeout: customTimeout });
  }
  async navigationTimeout(
    customTimeout: number = timeouts.navigation,
  ): Promise<void> {
    await this.page.goto(routes.site, {
      timeout: 1,
    });
  }
}
