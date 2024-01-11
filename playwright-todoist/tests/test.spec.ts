import { test, expect } from '@playwright/test';
import { browserWrapper } from '../infrastructre/BrowserWraper';
import config from '../config.json'
import { WebPage } from '../logic/WebPage';
import { LoginPage } from '../logic/LoginPage';
import { MainPage } from '../logic/mainPage';
import { exitCode } from 'process';

let browser:browserWrapper 
let page:any

test.beforeEach(async ({},testinfo)=>{
    browser= new browserWrapper()
    page=await browser.getPage(config.url)
    let webpage=new WebPage(page)
    await webpage.clickLoginButton()
    let loginpage=new LoginPage(page)
    await loginpage.fillEmailInput(config.email)
    await loginpage.fillPassword(config.password)
    await loginpage.clickSubmit()
    await loginpage.waitForLoad("networkidle")

})

test.afterEach(async ({},tsetinfo)=>{
  browser.closeDriver()
})



test.describe("tests",()=>{

  test('add task', async ({ }) => {
    //arrange
    let mainpage=new MainPage(page)
    await mainpage.SIDE_BAR.clickAddTask()
    await mainpage.ADD_TASK_POPUP.fillTaskName("stam")
    //act
    await mainpage.ADD_TASK_POPUP.clickAddTask()
    //asert
    expect((await mainpage.getTaksNames())[0]).toContain("stam")
  
  });


  test('delete task', async ({ }) => {
    //arrange
    let mainpage=new MainPage(page)
    await mainpage.SIDE_BAR.clickAddTask()
    await mainpage.ADD_TASK_POPUP.fillTaskName("stam1")
    await mainpage.ADD_TASK_POPUP.clickAddTask()
    //act
    let deletedTaskName=await mainpage.deleteTask(0)
    //assert
    expect((await mainpage.getTaksNames())[0]).not.toContain(deletedTaskName)

  });

  test('delete all task', async ({ }) => {

    let mainpage=new MainPage(page)
    //arange
    await mainpage.addtaskevent("stam2")
    await mainpage.addtaskevent("stam2")
    await mainpage.addtaskevent("stam2")
    //act
    await mainpage.deletallTaks()
    //assert
    expect(await mainpage.getCountTask()).toBe(0)

  });

  test('add project', async ({ }) => {
    //arange
    let mainpage=new MainPage(page)
    await mainpage.SIDE_BAR.clickAddProjectButton()
    await mainpage.NEW_PROJECT?.fillProjectName("test")
    //act
    await mainpage.NEW_PROJECT?.clickAddProject()
    //assert
    expect(await mainpage.SIDE_BAR.getProjectsNames()).toContain("test")


  });




})
