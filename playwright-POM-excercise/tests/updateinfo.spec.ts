import { test, expect, Page } from '@playwright/test';
import { LogInPage } from '../logic/LogInPage';
import { browserWrapper } from '../infrastructre/BrowserWraper';
import  configJson  from '../config.json' 
import { Dashboard } from '../logic/Dashboard';
import { MyInfo } from '../logic/MyInfo';
import { PIM } from '../logic/PIM';
//import { Dashboard } from '../logic/Dashboard';

let loginPage:LogInPage 
let browserwrapper:browserWrapper=new browserWrapper()
let pageContext:Page


test.beforeEach(async ({page},testinfo)=>{

    browserwrapper=new browserWrapper()
    pageContext=await browserwrapper.getPage(configJson.url)
    loginPage=new LogInPage(pageContext);
    await loginPage.fillEmail(configJson.username);
    await loginPage.fillPassword(configJson.password);
    await loginPage.clickSubmit();
    await loginPage.waitForLoad("load");

})

test.describe("flows",()=>{

    test('update info', async ({ page }) => {
 
        let dashboard=new Dashboard(pageContext);
        await dashboard.getSidebar().clickMyInfoButton();
        await dashboard.waitForLoad("load");
        let Myinfo =new MyInfo(pageContext);
        await Myinfo.fillFirstname("baker");
        await Myinfo.fillLastname("mhajna");
        await Myinfo.clickSaveButton();
        expect(await Myinfo.getHeader().checkUserNameInDropdown()).toBe("baker mhajna")
        
    });
    
    test('remove record', async ({ page }) => {
     
        let dashboard=new Dashboard(pageContext);
        await dashboard.getSidebar().clickPIMButton();
        await dashboard.waitForLoad("load");
        let PIMPage=new PIM(pageContext);
        await PIMPage.clickRemove();
        expect(await PIMPage.checkSuccess()).toBeTruthy()        
    });





})
