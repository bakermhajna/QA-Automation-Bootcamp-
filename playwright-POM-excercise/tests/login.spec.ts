import { test, expect, Page } from '@playwright/test';
import { LogInPage } from '../logic/LogInPage';
import { browserWrapper } from '../infrastructre/BrowserWraper';
import  configJson  from '../config.json' 
import { Dashboard } from '../logic/Dashboard';
//import { Dashboard } from '../logic/Dashboard';

let loginPage:LogInPage 
let browserwrapper:browserWrapper=new browserWrapper()
let pageContext:Page


test.beforeEach(async ({page},testinfo)=>{

  browserwrapper=new browserWrapper()
  pageContext=await browserwrapper.getPage(configJson.url)
  loginPage=new LogInPage(pageContext);

})

test('login', async ({ page }) => {
 
    await loginPage.fillEmail(configJson.username);
    await loginPage.fillPassword(configJson.password);
    await loginPage.clickSubmit();
    await loginPage.waitForLoad("load");
    let dashboard=new Dashboard(pageContext)
    expect(await dashboard.getHeader().getTitle()).toBe("Dashboard")
    
});
