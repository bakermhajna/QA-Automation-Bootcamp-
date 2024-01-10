import { test, expect,chromium, Browser, Page  } from '@playwright/test';
export class browserWrapper{



    browser: Browser | undefined
    page: Page | undefined

    async getPage(url: string){
        this.browser = await chromium.launch();
        const context = await this.browser.newContext();
        this.page = await context.newPage();
        if (url){
            await this.page.goto(url);
        }
        this.page.setViewportSize({width:1920,height:1080})
        return this.page;
    }

    async closeDriver(){
        await this.browser?.close(); 
    }

    async waitForEventDownload(){
        await this.page?.waitForEvent("download")
    }




}