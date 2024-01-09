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
    expect(mainPage.getTable().first().locator("class=item-name ng-star-inserted")).toBe("דלק רכב")
  })
  test("last",async ({ page })=>{

    await mainPage.securitiesSelect('1');
    await mainPage.sort();
    expect(mainPage.getTable().last().locator("class=item-name ng-star-inserted")).toBe("מטעי הדר 5")
  })
  test("count",async ({ page })=>{

    await mainPage.securitiesSelect('1');
    await mainPage.sort();
    expect(mainPage.getTable().count()).toBe(30)
  })



})