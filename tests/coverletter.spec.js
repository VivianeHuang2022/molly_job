import { test, expect } from '@playwright/test';

test('coverletterSTD', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('Studying abroadGeneration of').click();
  await page.getByRole('button', { name: 'Cover Letter' }).click();

  // login(需要替换邮箱和密码为当前数据库可用的邮箱和密码)
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('zonlily@outlook.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('123456');
  await page.getByRole('button', { name: 'Log in' }).click();

  //第1页
  await page.getByPlaceholder('Germany').click();
  await page.getByPlaceholder('Germany').fill('United States');
  await page.getByPlaceholder('TU Berlin').click();
  await page.getByPlaceholder('TU Berlin').fill('Harvard University');
  await page.getByPlaceholder('Master').click();
  await page.getByPlaceholder('Master').fill("Bachelor's Degree");
  await page.getByPlaceholder('Computer Science').click();
  await page.getByPlaceholder('Computer Science').fill('Computer Science');
  await page.getByRole('button', { name: 'Next' }).click();

  //第2页
  await page
    .getByText(
      "I am enthusiastic about pursuing my [ Bachelor's Degree ] degree at [ Harvard"
    )
    .fill(
      "I am enthusiastic about pursuing my [ Bachelor's Degree ] degree at [ Harvard University ] in [ United States ] due to its distinguished reputation in [ Computer Science].I hold a [ high school, bachelor or master ] degree in[Data Science ] from [shanghai uni] in[ the country you studied ]. where I gained a solid foundation in my major and developed a strong background in [ Data Science ] . Moreover, my coursework in [ Machine Learning, Data Analysis ]  have deepened my interest in this field "
    );
  await page.getByRole('button', { name: 'Next' }).click();

  //第3页没有必填项 第4页必填项前面填过了
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();

  //第5页
  await page.getByPlaceholder('e.g. Vivinae').click();
  await page.getByPlaceholder('e.g. Vivinae').fill('1');
  await page.getByPlaceholder('e.g. Fa').click();
  await page.getByPlaceholder('e.g. Fa').fill('1');
  await page.getByPlaceholder('e.g. India').click();
  await page.getByPlaceholder('e.g. India').fill('1');
  await page.getByPlaceholder('e.g. 1992.12').click();
  await page.getByPlaceholder('e.g. 1992.12').fill('1');
  await page.getByPlaceholder('e.g. 1234567').click();
  await page.getByPlaceholder('e.g. 1234567').fill('1');
  await page.getByPlaceholder('e.g. xx@gmail.com').click();
  await page.getByPlaceholder('e.g. xx@gmail.com').fill('1');
  await page.getByRole('button', { name: 'Next' }).click();

  //生成页 切换按钮 & 生成
  await page.getByText('English').click();
  await page.getByText('German', { exact: true }).click();
  await page.getByRole('button', { name: 'right' }).click();
  await page.getByRole('button', { name: 'right' }).click();
  await page.locator('#root').getByText('German').click();
  await page.getByText('English', { exact: true }).click();
  await page.getByRole('button', { name: 'right' }).click();
  await page.getByRole('button', { name: 'Generate Document' }).click();
});
