import { Locator, Page } from "playwright/test";

export class mainpage{

    page:Page;

    tableRows:Locator
    SecuritiesSelector:Locator
    sortButton:Locator
    filterButton:Locator

    constructor(page:Page){
        this.page=page;
        this.tableRows=this.page.locator('//tr[@class="ng-star-inserted"]');
        this.SecuritiesSelector=this.page.locator('//security-category-filter//div[@class="date_sorting"]//select');
        this.sortButton=this.page.locator('//button[@aria-label="מיון בסדר יורד לפי מס\' ני\'\'ע"]');
        //this.filterButton=this.page.b
    }

    getTable(){
        return this.tableRows
    }
    async securitiesSelect(value:string){
        await this.SecuritiesSelector.selectOption(value);
    }

    async sort(){
        await this.sortButton.click();
    }
}