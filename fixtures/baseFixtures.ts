import {test as base} from "@playwright/test"
import { BrowserWIndowsPage } from "../pages/bookTabs";
import { dateUtil } from "./utilFixtures";

type MyFixtures = {
    browserWindowsPage: BrowserWIndowsPage;
    dateutil:dateUtil;
}

export const test = base.extend<MyFixtures>({
    browserWindowsPage: async ({page,context} , use) => {
        await use(new BrowserWIndowsPage(page,context));
    },
    dateutil: async ({},use) => {
        const  dateutil = new dateUtil();
        await use(dateutil)
    }
    
})

export { expect} from '@playwright/test'