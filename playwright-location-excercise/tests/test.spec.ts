import { test, expect } from '@playwright/test';
import { mainpage } from '../logic/mainPage';
import { browserWrapper } from '../infrastructre/BrowserWraper';


let mainPage:mainpage 
let browserwrapper:browserWrapper 


test.beforeEach(async ({page},testinfo)=>{
  browserwrapper=new browserWrapper()
  mainPage=new mainpage(await browserwrapper.getPage('https://market.tase.co.il/he/market_data/securities/data/stocks'));

})


test.describe("test", ()=>{
  

  test("first",async ({ page })=>{

    await mainPage.securitiesSelect('1');
    await mainPage.sort();
    await mainPage.waitForLoadState('networkidle')
    await mainPage.getTable().first().waitFor()
    expect(await mainPage.getTable().first().locator('//td[@class="ng-star-inserted"]').innerText()).toBe("דלק רכב")
  
  });

  test("last",async ({ page })=>{

    await mainPage.securitiesSelect('1');
    await mainPage.sort();
    await mainPage.waitForLoadState('networkidle')
    await mainPage.getTable().last().waitFor()
    expect(await mainPage.getTable().last().locator('//td[@class="ng-star-inserted"]//a').innerText()).toBe("מטעי הדר 5")
  });

  test("count",async ({ page })=>{

    await mainPage.securitiesSelect('1');
    await mainPage.sort();
    await mainPage.waitForLoadState("networkidle");
    expect(await mainPage.getTable().count()).toBe(30);
  });


  test("click",async ({ page })=>{

    await mainPage.getTable().first().waitFor();
    const title=await mainPage.getTable().first().locator("//td//a").innerText()
    await mainPage.getTable().first().locator("//td//a").click();
    expect(mainPage.page.getByText(title)).toBeVisible()
  });


})