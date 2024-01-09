import { Locator, Page } from "playwright-core";
import { BasePage } from "../infrastructre/BasePage";
import { SideBar } from "./SideBar";
import { Header } from "./Header";

export class MyInfo extends BasePage{


    private FIRSTNAME:Locator;
    
    private MIDDLENAME:Locator;
    
    private LASTNAME:Locator;
    
    private NICKNAME:Locator;
    
    private SIDE_BAR:SideBar;
    
    private HEADER:Header;

    private SAVE_BUTTON:Locator;
    
    
    constructor(page:Page){
        super(page);
        this.FIRSTNAME=this.page.locator('//div[@class="--name-grouped-field"]//input[contains(@class,"orangehrm-firstname")]');
        this.MIDDLENAME=this.page.locator('//div[@class="--name-grouped-field"]//input[contains(@class,"orangehrm-middlename")]');
        this.NICKNAME=this.page.locator('//div[div[div[label[contains(text(),"Nickname")]]]]//input');
        this.LASTNAME=this.page.locator('//div[@class="--name-grouped-field"]//input[contains(@class,"orangehrm-lastname")]');
        this.SAVE_BUTTON=this.page.locator('(//button[@class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"])[1]')
        this.SIDE_BAR=new SideBar(this.page);
        this.HEADER=new Header(this.page);
    }

    getSideBar():SideBar{
        return this.SIDE_BAR;
    }

    getHeader(){
        return this.HEADER;
    }

    async clickSaveButton(){
        await this.SAVE_BUTTON.click();
    }

    async fillFirstname(firstname:string){
        await this.FIRSTNAME.clear();
        await this.FIRSTNAME.fill(firstname);
    }

    async fillMiddlename(middlename:string){
        await this.MIDDLENAME.clear();
        await this.MIDDLENAME.fill(middlename);
    }

    async fillNickname(nickname:string){
        await this.NICKNAME.clear();
        await this.NICKNAME.fill(nickname);
    }
    async fillLastname(lastname:string){
        await this.LASTNAME.clear();
        await this.LASTNAME.fill(lastname);
    }


    
}