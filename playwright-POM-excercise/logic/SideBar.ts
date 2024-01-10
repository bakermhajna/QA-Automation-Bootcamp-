import { Locator, Page } from "playwright-core";
import { BasePage } from "../infrastructre/BasePage";

export class SideBar extends BasePage{


    private PIM_BUTTON:Locator
    private MY_INFO_BUTTON:Locator
    private ADMIN_BUTTON:Locator
    

    constructor(page:Page){
        super(page)
        this.ADMIN_BUTTON=this.page.locator('(//a[@class="oxd-main-menu-item"]//span)[1]')
        this.PIM_BUTTON=this.page.locator('(//a[@class="oxd-main-menu-item"]//span)[2]')
        this.MY_INFO_BUTTON=this.page.locator('(//a[@class="oxd-main-menu-item"]//span)[6]')
    }


    async clickAdminButton() {

        await this.ADMIN_BUTTON.click();
    }

    async clickPIMButton(){
        await this.PIM_BUTTON.click();
    }

    async clickMyInfoButton(){
        await this.MY_INFO_BUTTON.click();
    }



}