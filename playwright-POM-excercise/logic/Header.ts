import { Locator, Page } from "playwright-core";
import { BasePage } from "../infrastructre/BasePage";

export class Header extends BasePage{

    private USERDROPDOWN:Locator

    private TITLE:Locator;

    //private USER_NAME_IN_DROPDOWN:Locator

    constructor(page:Page){
        super(page);
        this.USERDROPDOWN=this.page.locator('//span[@class="oxd-userdropdown-tab"]');
        this.TITLE=this.page.locator('//h6');
        //this.USER_NAME_IN_DROPDOWN=this.page.locator('');
    }

    async getTitle(){
        return await this.TITLE.innerText();
    }

    async clickUserdropdown(){
        await this.USERDROPDOWN.click();
    }

    async checkUserNameInDropdown():Promise<string>{
        const USER_NAME_IN_DROPDOWN=await this.page.locator('//p[@class="oxd-userdropdown-name"]');
         return await USER_NAME_IN_DROPDOWN.innerText()
    }


}