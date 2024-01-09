import { test, expect } from '@playwright/test';
import { InputPage } from '../logic/inputsPAge';
import { browserWrapper } from '../infrastructre/BrowserWraper';

let inputpage:InputPage
let browserwrapper:browserWrapper


test.beforeEach( async ({page},testinfo) => {
  browserwrapper=new browserWrapper()
  inputpage=new InputPage(await browserwrapper.getPage("https://www.activetrail.com/free-trial/"))
});


test.describe('error messages', () => {
  
  test('email', async ({ page }) => {
    inputpage.fillEmail("stam eamil")
    expect(await inputpage.getEmailError()).toBeVisible()
  });

  
});

