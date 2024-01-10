import { Locator, Page } from "playwright";
import { BasePage } from "../infrastructre/BasePage";

export class LoginPage extends BasePage{



    private EMAIL_INPUT:Locator;
    private PASSWORD_INPUT:Locator;
    private SUBMIT_BUTTON:Locator;
    
    constructor(page:Page) {
        super(page);
        this.EMAIL_INPUT=this.page.locator('//input[@id="email-login"]');
        this.PASSWORD_INPUT=this.page.locator('//input[@id="password-login"]');
        this.SUBMIT_BUTTON=this.page.locator('//input[@id="btn-login"]');
    }


    async fillInfoAndSubmit(email:string,password:string){
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickSubmit();
    }

    private async fillEmail(email:string){
        await this.EMAIL_INPUT.fill(email);
    }

    private async fillPassword(password:string){
        await this.PASSWORD_INPUT.fill(password);
    }

    private async clickSubmit(){
        await this.SUBMIT_BUTTON.click();
    }





}