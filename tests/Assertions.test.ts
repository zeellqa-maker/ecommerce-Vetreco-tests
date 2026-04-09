import {test,expect} from '@playwright/test';

    test('Assertions',async ({page}) => {

        await page.goto('https://demo.nopcommerce.com/register');

        // toHaveURL to verify that that page has same URL or not..

        await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

        // to verify the title of the page
        await expect(page).toHaveTitle('nopCommerce demo store. Register');

        // to check element is visible or not.. 

        await expect(page.locator("//img[@alt='nopCommerce demo store']")).toBeVisible();

        //to check element is enabled or not. 

        const searchbox = await page.locator('#small-searchterms');
        await expect(searchbox).toBeEnabled();

        // radio button or checkbox is selected or not 

        const maleRadio = await page.locator('#gender-male');
        await maleRadio.click();
        await expect(maleRadio).toBeChecked();

        const newsLetter = await page.locator('#Newsletter')
        await expect(newsLetter).toBeChecked();

        // to check element has attribute 

        const regBtn = await page.locator('#register-button');
            


    })
