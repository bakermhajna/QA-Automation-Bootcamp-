import { test, expect,chromium, Browser, Page  } from '@playwright/test';
export class browserWrapper{



    browser: Browser | undefined
    page: Page | undefined

    async getPage(url:string){
        this.browser = await chromium.launch();
        const context = await this.browser.newContext(); 
        this.page = await context.newPage(); 
        await this.page.goto(url); 
        console.log(await this.page.title()); 
        return this.page
    }

    async closeDriver(){
        await this.browser?.close(); 
    }




}