import { Locator, Page } from "playwright";
import { BasePage } from "../infrastructre/BasePage";

export class MainPage extends BasePage{
    

    private LOGIN_BUTTON:Locator;
    private MESHAR_NTONEM:Locator
    private STARISTICOT_MISHAR:Locator

    constructor(page:Page){
        super(page);
        // this.LOGIN_BUTTON= this.page.getByText("איזור אישי");
        this.LOGIN_BUTTON= this.page.locator("tase-header >>> header >>> div >>> div >>> button");
        this.MESHAR_NTONEM =this.page.getByText("מסחר ונתונים");
        this.STARISTICOT_MISHAR=this.page.getByText("סטטיסטיקות מסחר",{exact:true});
    }

    async clickLoginButton(){
        await this.LOGIN_BUTTON.click();
        await this.waitForLoad()
    }

    async getusername():Promise<String | null> {
        
        return await this.LOGIN_BUTTON.textContent();
    }

    async hoverMeshar(){
        await this.MESHAR_NTONEM.nth(0).hover();
    }

    async clickOnStatisticot(){
        await this.STARISTICOT_MISHAR.nth(0).click();
        await this.waitForLoad()
    }

    

}

 