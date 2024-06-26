import { test, expect } from '@playwright/test';
require('dotenv').config();

test('recommendor_English', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('img', { name: 's_logo' }).click();
  await page.getByRole('button', { name: 'Recommendation Letter' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(process.env.REACT_APP_TEST_EMAIL);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(process.env.REACT_APP_TEST_KEY);
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByPlaceholder('Enter your first name').click();
  await page.getByPlaceholder('Enter your first name').fill('11');
  await page.getByPlaceholder('Enter your first name').press('Tab');
  await page.getByPlaceholder('Enter your surname').fill('1');
  await page.getByPlaceholder('Enter your surname').press('Tab');
  await page.getByPlaceholder('Enter the degree you aspire').fill('1');
  await page.getByPlaceholder('Enter the degree you aspire').press('Tab');
  await page.getByPlaceholder('Enter the name of your dream').fill('1');
  await page.getByPlaceholder('Enter the major you wish to').click();
  await page.getByPlaceholder('Enter the major you wish to').fill('1');
  await page.getByPlaceholder('Enter the major you wish to').press('Tab');
  await page.getByPlaceholder('Enter the country where you').fill('1');
  await page.getByPlaceholder('Enter the country where you').press('Tab');
  await page.getByPlaceholder('Enter the name of the').fill('1');
  await page.getByPlaceholder('Enter the name of the').press('Tab');
  await page.getByPlaceholder('Enter the country you are').fill('1');
  await page.getByPlaceholder('Enter the country you are').press('Tab');
  await page.getByPlaceholder('Enter the degree you are').fill('1');
  await page.getByPlaceholder('Enter the degree you are').press('Tab');
  await page.getByPlaceholder('Enter the major you are').fill('1');
  await page.getByPlaceholder('Samantha@gmail.com').click();
  await page.getByPlaceholder('Samantha@gmail.com').fill('51');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Generate Document' }).click();
});

test('recommendor_Chinese', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: '简体中文' }).click();
  await page
    .getByText('留学生成你的留学简历和求职信（例如大学入学、奖学金申请等）。')
    .click();
  await page.getByRole('button', { name: '推荐信' }).click();
  await page.getByPlaceholder('邮箱地址').click();
  await page
    .getByPlaceholder('邮箱地址')
    .fill(process.env.REACT_APP_TEST_EMAIL);
  await page.getByPlaceholder('输入密码').click();
  await page.getByPlaceholder('输入密码').fill(process.env.REACT_APP_TEST_KEY);
  await page.getByRole('button', { name: '登 录' }).click();
  await page.getByPlaceholder('请输入您的名字').click();
  await page.getByPlaceholder('请输入您的名字').fill('1111');
  await page.getByPlaceholder('请输入您的名字').press('Tab');
  await page.getByPlaceholder('请输入您的姓氏').fill('9');
  await page.getByPlaceholder('请输入您的姓氏').press('Tab');
  await page.getByPlaceholder('请输入您梦想获得的学位').fill('9');
  await page.getByPlaceholder('请输入您梦想获得的学位').press('Tab');
  await page.getByPlaceholder('请输入您梦想的大学名称').fill('9');
  await page.getByPlaceholder('请输入您梦想的大学名称').press('Tab');
  await page.getByPlaceholder('请输入您梦想大学的地址').fill('9');
  await page.getByPlaceholder('请输入您梦想大学的地址').press('Tab');
  await page.getByPlaceholder('请输入您梦想就读的专业').fill('9');
  await page.getByPlaceholder('请输入您梦想就读的专业').press('Tab');
  await page.getByPlaceholder('请输入您梦想留学的国家').fill('9');
  await page.getByPlaceholder('请输入您梦想留学的国家').press('Tab');
  await page.getByPlaceholder('请输入您目前就读的大学名称').fill('3');
  await page.getByPlaceholder('请输入您目前就读的大学名称').press('Tab');
  await page.getByPlaceholder('请输入您目前所在的国家').fill('3');
  await page.getByPlaceholder('请输入您目前所在的国家').press('Tab');
  await page.getByPlaceholder('请输入您目前正在攻读的学位').fill('3');
  await page.getByPlaceholder('请输入您目前正在攻读的学位').press('Tab');
  await page.getByPlaceholder('请输入您目前就读的专业').fill('3');
  await page.getByPlaceholder('请输入您目前就读的专业').press('Tab');
  await page.getByPlaceholder('请输入您目前的GPA成绩').fill('3');
  await page.getByPlaceholder('请输入您目前的GPA成绩').press('Tab');
  await page.getByPlaceholder('请输入名字').fill('3');
  await page.getByPlaceholder('请输入名字').press('Tab');
  await page.getByPlaceholder('输入姓氏').fill('3');
  await page.getByPlaceholder('输入姓氏').press('Tab');
  await page.getByPlaceholder('导师/教授/主管/经理').fill('3');
  await page.getByPlaceholder('导师/教授/主管/经理').press('Tab');
  await page.getByPlaceholder('大学/公司').fill('3');
  await page.getByPlaceholder('大学/公司').press('Tab');
  await page.getByPlaceholder('请具体说明推荐人的职位或头衔').fill('2');
  await page.getByPlaceholder('请具体说明推荐人的职位或头衔').press('Tab');
  await page.getByPlaceholder('王晓明@example.com').fill('2');
  await page.getByPlaceholder('王晓明@example.com').press('Tab');
  await page.getByPlaceholder('请输入...').fill('2222\n\n');
  await page.getByPlaceholder('请输入...').press('Tab');
  await page.getByPlaceholder('请分享您的故事').fill('2222\n4');
  await page.getByRole('button', { name: '保存数据' }).click();
  await page.getByRole('button', { name: '提 交' }).click();
  await page.getByText('英文').click();
  await page.getByText('德语').click();
  await page.locator('#root').getByTitle('德语').click();
  await page.getByText('英文').click();

  await page.getByRole('button', { name: 'right' }).click();
  await page.getByRole('button', { name: '生成文档' }).click();
  await page.goto('http://localhost:3000/#/download');
  // 在特定等待函数中设置超时时间 90s
  const downloadPromise = page.waitForEvent('download', { timeout: 90000 });
  await page.getByRole('button', { name: '下载 PDF & Word' }).click();
  const download = await downloadPromise;
  await page.getByRole('heading', { name: '下载成功' }).click();
});
