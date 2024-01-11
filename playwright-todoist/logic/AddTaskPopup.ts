import { Locator, Page } from "playwright";

export class AddTask{


    private TASK_NAME_INPUT:Locator
    private ADD_BUTTON:Locator


    constructor(page:Page){
        this.TASK_NAME_INPUT=page.locator('//p[@data-placeholder="Task name"]')
        this.ADD_BUTTON=page.locator('//button[@data-testid="task-editor-submit-button"]')
    }

    async fillTaskName(taskName:string){
        await this.TASK_NAME_INPUT.fill(taskName)
    }

    async clickAddTask(){
        await this.ADD_BUTTON.click()
    }

}