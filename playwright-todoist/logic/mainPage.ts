import { Locator, Page } from "playwright";
import { BasePage } from "../infrastructre/BasePage";
import { SideMenue } from "./SideMenue";
import { AddTask } from "./AddTaskPopup";
import utils from '../infrastructre/utils'
import { NewProject } from "./NewProjectPopup";

export class MainPage extends BasePage{

    SIDE_BAR:SideMenue

    ADD_TASK_POPUP:AddTask

    NEW_PROJECT:NewProject |undefined

    private TASKS:Locator
    

    constructor(page:Page){
        super(page);
        this.SIDE_BAR=new SideMenue(page);
        this.ADD_TASK_POPUP=new AddTask(page)
        this.TASKS=this.page.locator('//div[@data-test-id="virtuoso-item-list"]/div')
    }

    async addtaskevent(taskname:string){
        await this.SIDE_BAR.clickAddTask()
        await this.ADD_TASK_POPUP.fillTaskName(taskname)
        await this.ADD_TASK_POPUP.clickAddTask()
        await utils.delay(500)

    }


    async addTask(taskname:string){
        await this.ADD_TASK_POPUP.fillTaskName(taskname)
        await this.ADD_TASK_POPUP.clickAddTask()
        await this.waitForLoad()
    }

    async getCountTask(){
        return await this.TASKS.count()
    }

    async getTaksNames(){

        const innerTextsPromises = (await this.TASKS.all()).map(async task=>{
            return await task.locator('//div[@class="task_list_item__content"]/div/div[1]').allInnerTexts()
        })
        return await Promise.all(innerTextsPromises);
    }

    async deleteTask(index:number){

        let taskName=await this.TASKS.nth(index).locator('//div[@class="task_list_item__content"]/div/div[1]').allInnerTexts()
        await this.TASKS.nth(index).locator('//button[@aria-label="Mark task as complete"]').click()
        await utils.delay(500)
        return taskName
    }

    async deletallTaks(){

        let tasksCount=await this.TASKS.count()

        for(let i=0;i<tasksCount;i++){
            await this.deleteTask(0)
        }
        await this.waitForLoad("networkidle")
    }

    async addProject(projectname:string){
        await this.NEW_PROJECT?.fillProjectName(projectname)
        await this.NEW_PROJECT?.clickAddProject();
        await this.waitForLoad("networkidle")
    }


}