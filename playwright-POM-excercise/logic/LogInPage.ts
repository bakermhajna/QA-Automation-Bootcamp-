import { Locator, Page } from "playwright-core";
import { BasePage } from "../infrastructre/BasePage";

export class LogInPage extends BasePage{

    private emailInput:Locator
    private passwordInput:Locator
    private submitButton:Locator

    constructor(page:Page){
        super(page);
        this.emailInput=this.page.locator('//input[@name="username"]');
        this.passwordInput=this.page.locator('//input[@name="password"]');
        this.submitButton=this.page.locator('//button[text()=" Login "]');
    }

    


    async fillEmail(eamil:string){
        await this.emailInput.waitFor()
        await this.emailInput.fill(eamil);
    }

    async fillPassword(password:string){
        await this.passwordInput.fill(password);
    }

    async clickSubmit(){
        await this.submitButton.click();
    }



}