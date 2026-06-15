import {test as base} from "@playwright/test"
import { BrowserWIndowsPage } from "../pages/bookTabs";
import { dateUtil } from "./utilFixtures";
import { DebugPage } from "../pages/debugPage";

type MyFixtures = {
    browserWindowsPage: BrowserWIndowsPage;
    dateutil:dateUtil;
    debugPage: DebugPage 
}

export const test = base.extend<MyFixtures>({
    browserWindowsPage: async ({page,context} , use) => {
        await use(new BrowserWIndowsPage(page,context));
    },
    debugPage: async ({page},use ) => {
        await use(new DebugPage(page))
    },

    dateutil: async ({},use) => {
        const  dateutil = new dateUtil();
        await use(dateutil)
    }
    
})

export { expect} from '@playwright/test'