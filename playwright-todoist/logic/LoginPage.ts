import { Locator, Page } from "playwright";
import { BasePage } from "../infrastructre/BasePage";

export class LoginPage extends BasePage{

    private EMAIL_INPUT:Locator;
    private PASSWORD_INPUT:Locator;
    private SUBMIT_BUTTON:Locator;

    constructor(page:Page){
        super(page)
        this.EMAIL_INPUT=this.page.getByPlaceholder('Enter your email...')
        this.PASSWORD_INPUT=this.page.getByPlaceholder('Enter your password...')
        this.SUBMIT_BUTTON=this.page.locator('//button[@data-gtm-id="start-email-login"]');
    }


    async fillEmailInput(email:string){
        await this.EMAIL_INPUT.fill(email);
    }

    async fillPassword(password:string){
        await this.PASSWORD_INPUT.fill(password);
    }

    async clickSubmit(){
        await this.SUBMIT_BUTTON.click()
        this.waitForLoad()

    }


}