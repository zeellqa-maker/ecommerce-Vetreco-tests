const {test,expect} = require('@playwright/test');
test('Homepage open website', async({page}) =>{

  await page.goto("https://demoblaze.com/");

  const PageTitle =  await page.title(); // created a variable off pagetitle 
  console.log('page title is :', PageTitle );

    await expect(page).toHaveTitle('STORE');

    const pageURL = await page.url();

    console.log('page url is:', pageURL);
    await expect(page).toHaveURL('https://demoblaze.com/');
   await page.close();

})