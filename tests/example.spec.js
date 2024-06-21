import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.goto('http://localhost:3000/#/start');
  await page.getByText('Studying abroadGeneration of').click();
  await page.getByRole('button', { name: 'Cover Letter' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('zonlily@outlook.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('123456');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByPlaceholder('Germany').click();
  await page.getByPlaceholder('Germany').fill('United States');
  await page.getByPlaceholder('TU Berlin').click();
  await page.getByPlaceholder('TU Berlin').fill('Harvard University');
  await page.getByPlaceholder('Master').click();
  await page.getByPlaceholder('Master').fill("Bachelor's Degree");
  await page.getByPlaceholder('Computer Science').click();
  await page.getByPlaceholder('Computer Science').fill('Computer Science');
  await page.getByRole('button', { name: 'Next' }).click();

  await page
    .getByText(
      "I am enthusiastic about pursuing my [ Bachelor's Degree ] degree at [ Harvard"
    )
    .fill(
      "I am enthusiastic about pursuing my [ Bachelor's Degree ] degree at [ Harvard University ] in [ United States ] due to its distinguished reputation in [ Computer Science].I hold a [ high school, bachelor or master ] degree in[Data Science ] from [shanghai uni] in[ the country you studied ]. where I gained a solid foundation in my major and developed a strong background in [ Data Science ] . Moreover, my coursework in [ Machine Learning, Data Analysis ]  have deepened my interest in this field "
    );

  await page.getByRole('button', { name: 'Next' }).click();
});
