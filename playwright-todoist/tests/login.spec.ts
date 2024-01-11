import { test, expect } from '@playwright/test';
import { browserWrapper } from '../infrastructre/BrowserWraper';
import config from '../config.json'
import { WebPage } from '../logic/WebPage';
import { LoginPage } from '../logic/LoginPage';
import { MainPage } from '../logic/mainPage';

let browser:browserWrapper 
let page:any
test.beforeEach(async ({},testinfo)=>{
  browser= new browserWrapper()
  page=await browser.getPage(config.url)
  

})

test.afterEach(async ({},tsetinfo)=>{
  browser.closeDriver()
})



test.describe("login",()=>{

  test('login', async ({ }) => {
  
    let webpage=new WebPage(page)
    await webpage.clickLoginButton()
    let loginpage=new LoginPage(page)
    await loginpage.fillEmailInput(config.email)
    await loginpage.fillPassword(config.password)
    await loginpage.clickSubmit()
    let mainpage=new MainPage(page)
    expect(await mainpage.SIDE_BAR.getUserNameFromUserLabel()).toBe(config.name)

  });

})
