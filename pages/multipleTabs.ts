// import { Page, Locator, expect } from "@playwright/test";
// import { routes } from "../routes/routes";
// import { locators } from "../constants/locators";

// export class multipleTabs {
//   readonly page: Page;
//   readonly newTab: Locator;
//   readonly newWindow: Locator;
//   readonly newWindowMessage: Locator;

//   constructor(page: Page) {
//     this.page = page;
//     this.newTab = page.locator(locators.newTab);
//     this.newWindow = page.locator(locators.newWindow);
//     this.newWindowMessage = page.locator(locators.newWindowMessage);
//   }

//   async verifyOnPage(): Promise<void> {
//     await expect(this.page).toHaveURL(routes.site);
//   }

//   async openNewTab(): Promise<void> {
//     await this.newTab.click();
//   }
//   async openNewWindow(): Promise<void> {
//     await this.newWindow.click();
//   }
//   async openWindowMessage(): Promise<void> {
//     await this.newWindowMessage.click();
//   }
//   async verifyNewTab(): Promise<void> {
//       const [newTab] = await Promise.all([
//         context.waitForEvent("page"),
//         await this.openNewTab(),
//       ]);

//       // Wait for content and perform assertions
//       await newTab.waitForLoadState();
//       await expect(newTab).toHaveURL(routes.newTab);

//   }
// }


