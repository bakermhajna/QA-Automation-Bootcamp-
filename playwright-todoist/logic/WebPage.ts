import { Locator, Page } from "playwright";
import { BasePage } from "../infrastructre/BasePage";

export class WebPage extends BasePage{

    private LOGIN_BUTTON:Locator


    constructor(page:Page){
        super(page);
        this.LOGIN_BUTTON=this.page.getByText("Log in")
    }


    async clickLoginButton(){
        await this.LOGIN_BUTTON.nth(0).click()
        await this.waitForLoad()
    }




}