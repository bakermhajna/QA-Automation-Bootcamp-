import { test, expect, Page } from '@playwright/test';
import { browserWrapper } from '../infrastructre/BrowserWraper';
import { MainPage } from '../logic/MainPage';
import { LoginPage } from '../logic/LoginPage';
import config from '../config.json'
import { DailyReview } from '../logic/DailyReview';

let browserwrapper:browserWrapper
let page:Page


test.beforeEach(async ({},testinfo) => {

  browserwrapper=new browserWrapper();
  page=await browserwrapper.getPage(config.url)
  

});


test.afterEach(async ({ page },testinfo) => {
  await browserwrapper.closeDriver();
});

test.describe("download",()=>{


  test('download', async ({  }) => {
  
    let Mainpage =new MainPage(page);
    await Mainpage.clickLoginButton();

    let loginpage=new LoginPage(page);
    await loginpage.waitForLoad("load")
    await loginpage.fillInfoAndSubmit(config.email,config.password);

    Mainpage =new MainPage(page);
    await Mainpage.hoverMeshar()
    await Mainpage.clickOnStatisticot();

    let dailyreview= new DailyReview(page);
    await dailyreview.clickDownload();
    await browserwrapper.waitForEventDownload()
  });




})
