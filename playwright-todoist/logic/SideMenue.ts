import { Locator, Page } from "playwright";
import { BasePage } from "../infrastructre/BasePage";

export class SideMenue extends BasePage{

    
    private USER_LABEL:Locator
    private ADD_TASK_BUTTON:Locator
    private INBOX_BUTTON:Locator
    private ADD_PROJECT:Locator
    private PROJECTS_LIST:Locator
    

    constructor(page:Page){
        super(page);
        this.USER_LABEL=this.page.locator('//button[@id=":r0:"]//span//span//span');
        this.ADD_TASK_BUTTON=this.page.locator('nav > div ')
        this.INBOX_BUTTON=this.page.getByText("Inbox")
        this.ADD_PROJECT=this.page.locator('//button[@aria-label="Add project"]')
        this.PROJECTS_LIST=this.page.locator('//ul[@id="projects_list"]/div/div//a')
        
    }

    async getUserNameFromUserLabel():Promise<String | null>{
        return await this.USER_LABEL.textContent();
    }

    async  clickAddTask() {
        await this.ADD_TASK_BUTTON.nth(1).click()
    }

    async clickInbox(){
        await this.INBOX_BUTTON.click()
    }

    async clickAddProjectButton(){
        await this.ADD_PROJECT.click()
    }

    async countProjects(){
        return await this.PROJECTS_LIST.count()
    }

    async getProjectsNames() {
        const innerTextsPromises = (await this.PROJECTS_LIST.all()).map(async prj => await prj.innerText());
        return await Promise.all(innerTextsPromises);
    }



    




}