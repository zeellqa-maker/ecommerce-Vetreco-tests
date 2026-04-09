//const { test,expect} = require('@playwright/test');
import {test,expect} from '@playwright/test';

test('Locators',async ({page}) => {

    await page.goto('https://demoblaze.com/');
    await page.click('//a[@id="login2"]')
    await page.type('#loginusername','pavanol');
    await page.fill('#loginpassword','test@123');
    await page.click('//button[text()="Log in"]');
    const logoutlink = await page.locator('//a[@id="logout2"]');
    
    await expect(logoutlink).toBeVisible();
    await page.close();



    
})

