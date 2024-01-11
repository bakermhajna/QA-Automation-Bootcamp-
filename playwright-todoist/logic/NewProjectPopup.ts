import { Locator, Page } from "playwright";

export class NewProject{


    private PROJECT_NAME_INPUT:Locator
    private ADD_BUTTON:Locator


    constructor(page:Page){
        this.PROJECT_NAME_INPUT=page.locator('//input[@id="edit_project_modal_field_name"]')
        this.ADD_BUTTON=page.locator('//form[@class="edit_project_modal__form"]//button[span[contains(text(),"Add")]]')
    }

    async fillProjectName(projectName:string){
        await this.PROJECT_NAME_INPUT.fill(projectName)
    }

    async clickAddProject(){
        await this.ADD_BUTTON.click()
    }

}