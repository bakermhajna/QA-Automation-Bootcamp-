import { Locator, Page } from "playwright";


export class InputPage{
    email:Locator | undefined;
    password: Locator | undefined;
    firstName: Locator | undefined;
    lastName: Locator | undefined;
    phoneNumber: Locator | undefined;
    company:Locator | undefined;

    emailError:Locator | undefined;
    passwordError:Locator | undefined;
    nameError:Locator | undefined;
    lastnameError:Locator | undefined;
    phoneError:Locator | undefined;
    comapntError:Locator | undefined;

    page:Page

    constructor(page:Page){
        this.page=page
        this.locate()
        this.loacteErrorMessage()
    }
    

    async locate(){
        this.email = await this.page.locator('//input[@id="your-email"]');
        this.password = await this.page.locator('//input[@id="password"]');
        this.firstName = await this.page.locator('//span[@data-name="your-name"]/input');
        this.company = await this.page.locator('//span[@data-name="your-company"]/input');
        this.lastName= await this.page.locator('//span[@data-name="your-last-name"]/input');
        this.phoneNumber = await this.page.locator('//input[@id="phone"]');
    }

    async loacteErrorMessage() {
        this.emailError = await this.page.locator('//label[@id="your-email-error"]');
        this.passwordError= await this.page.locator('//label[@id="password-error"]');
        this.nameError= await this.page.locator('//label[@id="your-name-error"]');
        this.lastnameError= await this.page.locator('//label[@id="your-last-name-error"]');
        this.phoneError = await this.page.locator('//label[@id="phone-error"]');
        this.comapntError = await this.page.locator('//label[@id="your-company-error"]');
    }

    async fillEmail(email:string){
        await this.email?.fill(email)
    }

    async fillPassword(password:string){
        await this.password?.fill(password)
    }
    async fillName(name:string){
        await this.firstName?.fill(name)
    }
    async fillLastName(lastName:string){
        await this.lastName?.fill(lastName)
    }

    async fillPhone(phone:string){
        await this.phoneNumber?.fill(phone)
    }
    async fillCompany(company:string){
        await this.company?.fill(company)
    }
    async getEmailError():Promise<Locator>{
        return await this.page.locator('//label[@id="your-email-error"]');
    }




}