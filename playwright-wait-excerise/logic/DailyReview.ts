import { Locator, Page } from "playwright";
import { BasePage } from "../infrastructre/BasePage";

export class DailyReview extends BasePage{


    private DOWNLOAD_BUTTON:Locator;

    constructor(page:Page){
        super(page)
        this.DOWNLOAD_BUTTON=this.page.locator('//button[@aria-label="הורדת נתונים"]');
    }

    async clickDownload(){
        await this.DOWNLOAD_BUTTON.click()
        await this.page.locator('//a[contains(text(),"CSV")]').click()
    }


}