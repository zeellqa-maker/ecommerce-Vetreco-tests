const {test,expect} = require ('@playwright/test');

test('Built in function',async ({page}) => {
     
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    const username = await page.getByPlaceholder('Username').fill('Admin');
    const password = expect (await page.getByPlaceholder('Password')).toBeVisible();
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button',{type: 'submit'}).click();

   const name =  await page.locator('//p[@class="oxd-userdropdown-name"]').textContent();

    await expect(await page.getByText(name).first()).toBeVisible();
    
     
    
})