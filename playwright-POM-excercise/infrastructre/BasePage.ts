import { Page } from "playwright-core";

export class BasePage{

    protected page:Page;

    constructor(page:Page){
        this.page=page;
    }

    async waitForLoad(state?: "load" | "domcontentloaded" | "networkidle" | undefined){
        await this.page.waitForLoadState(state);
    }



}