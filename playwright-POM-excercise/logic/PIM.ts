import { Locator, Page } from "playwright-core";
import { BasePage } from "../infrastructre/BasePage";
import { SideBar } from "./SideBar";
import { Header } from "./Header";

export class PIM extends BasePage{

    private EMPLOYEE_NAME:Locator;
    private EMPLOYEE_ID:Locator;
    private Supervisor :Locator;
    private REMOVE_RECORD:Locator;
    private SIDE_BAR:SideBar;
    private HEADER:Header;
    
    
    constructor(page:Page){

        super(page)
        this.EMPLOYEE_NAME=this.page.locator('//div[div[label[contains(text(),"Employee Name")]]]//input');
        this.EMPLOYEE_ID=this.page.locator('//div[div[label[contains(text(),"Employee Id")]]]//input');
        this.Supervisor=this.page.locator('//div[div[label[contains(text(),"Supervisor Name")]]]//input');
        this.REMOVE_RECORD=this.page.locator('(//div[@class="oxd-table-card"])[1]//button[i[contains(@class,"bi-trash")]]');
        this.SIDE_BAR=new SideBar(this.page);
        this.HEADER=new Header(this.page);
    }

    getSideBar():SideBar{
        return this.SIDE_BAR;
    }

    getHeader(){
        return this.HEADER;
    }

    async fillEmployeeNAme(employyeNAme:string){
        await this.EMPLOYEE_NAME.fill(employyeNAme);
    }

    async fillEmployeeID(employeid:string){
        await this.EMPLOYEE_ID.fill(employeid)
    }

    async fillSupervisor(supervisor:string){
        await this.Supervisor.fill(supervisor)
    }

    async clickRemove(){
        await this.REMOVE_RECORD.click()
        await this.page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"]').click();
    }
    
    async checkSuccess():Promise<boolean>{
        let success= this.page.locator('(//div[@class="oxd-toast-container oxd-toast-container--bottom"]//div)[1]')
        await success.waitFor()
        return await success.isVisible()
    }


}