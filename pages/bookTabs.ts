
 
import { Page, BrowserContext } from "@playwright/test";
import { locators } from "../constants/locators";
 
 
export class BrowserWIndowsPage {
    readonly page: Page;
    readonly context: BrowserContext;
     readonly newTabBtn = locators.newTab
     readonly newWindowBtn = locators.newWindow
     readonly newWindowMsgBtn = locators.newWindowMessage
     readonly sampleHeading = locators.sampleHeading
 
 
constructor(page: Page, context: BrowserContext)
    {
        this.page = page;
        this.context = context;
    }
 
 
 
    async goto(): Promise<void>
    {
        await this.page.goto("https://demoqa.com/browser-windows");
    }
 
 
    async clickNewTab(): Promise<Page>
    {
        const [newPage] = await Promise.all([
        this.context.waitForEvent("page"),
        this.page.click(this.newTabBtn),]);
 
        await newPage.waitForLoadState("domcontentloaded");
        return newPage;
    }
 
 
     async clickNewWindow(): Promise<Page>
    {
        const [newPage] = await Promise.all([
        this.context.waitForEvent("page"),
        this.page.click(this.newWindowBtn),]);
        await newPage.waitForLoadState("domcontentloaded");
        return newPage;
    }
 
 
    async clickNewWindowMessage(): Promise<Page>
        {
 
        const [newPage] = await Promise.all([
        this.context.waitForEvent("page"),
        this.page.click(this.newWindowMsgBtn),]);
        await newPage.waitForLoadState("domcontentloaded");
        return newPage;
        }
 
 
    async PageHeadingText(childPage: Page): Promise<string>
        {
        return childPage.locator(this.sampleHeading).innerText();
        }
 
 
    async verifyPageIsVisible(): Promise<void>
    {
        await this.page.waitForSelector(this.newTabBtn, { state: "visible" });
    }
}
 
