// import { test, expect } from '@playwright/test';
// require('dotenv').config();

// test('coverletterSTD', async ({ page }) => {
//   await page.goto('http://localhost:3000/');
//   await page.getByText('Studying abroadGeneration of').click();
//   await page.getByRole('button', { name: 'Cover Letter' }).click();

//   // login(需要替换邮箱和密码为当前数据库可用的邮箱和密码)
//   await page.getByPlaceholder('Email').click();
//   await page.getByPlaceholder('Email').fill(process.env.REACT_APP_TEST_EMAIL);
//   await page.getByPlaceholder('Password').click();
//   await page.getByPlaceholder('Password').fill(process.env.REACT_APP_TEST_KEY);
//   await page.getByRole('button', { name: 'Log in' }).click();

//   //第1页
//   await page.getByPlaceholder('Germany').click();
//   await page.getByPlaceholder('Germany').fill('United States');
//   await page.getByPlaceholder('TU Berlin').click();
//   await page.getByPlaceholder('TU Berlin').fill('Harvard University');
//   await page.getByPlaceholder('Master').click();
//   await page.getByPlaceholder('Master').fill("Bachelor's Degree");
//   await page.getByPlaceholder('Computer Science').click();
//   await page.getByPlaceholder('Computer Science').fill('Computer Science');
//   await page.getByRole('button', { name: 'Next' }).click();

//   //第2页
//   await page.getByText('[ high sc4hool, bachelor or').click();
//   await page
//     .getByText(
//       'I am enthusiastic about pursuing my [ 1 ] degree at [ 1 ] in [ 1 ] due to its'
//     )
//     .fill(
//       'I am enthusiastic about pursuing my [ 1 ] degree at [ 1 ] in [ 1 ] due to its distinguished reputation in [ 1 . . . . . . ].I hold a [s high sc4hool, bachelor or master ] degree in[ your m1ajor ] from [ the name of your high school 1or university] in[ the country you stud1ied ]. where I gained a solid foundation in my major and developed a strong background in [ your m1ajor ] . Moreover, my coursework in [ mentio1n 2-3 relevant courses ]  have deepened my interest in this field '
//     );
//   await page.getByText('[ the name of your high').click();
//   await page
//     .getByText(
//       'I am enthusiastic about pursuing my [ 1 ] degree at [ 1 ] in [ 1 ] due to its'
//     )
//     .fill(
//       'I am enthusiastic about pursuing my [ 1 ] degree at [ 1 ] in [ 1 ] due to its distinguished reputation in [ 1 . . . . . . . ].I hold a [s s high sc4hool, bachelor or master ] degree in[ your m1ajor ] from [s the name of your high school 1or university] in[ the country you stud1ied ]. where I gained a solid foundation in my major and developed a strong background in [ your m1ajor ] . Moreover, my coursework in [ mentio1n 2-3 relevant courses ]  have deepened my interest in this field '
//     );
//   await page.getByText('[ the country you stud1ied ]').click();
//   await page
//     .getByText(
//       'I am enthusiastic about pursuing my [ 1 ] degree at [ 1 ] in [ 1 ] due to its'
//     )
//     .fill(
//       'I am enthusiastic about pursuing my [ 1 ] degree at [ 1 ] in [ 1 ] due to its distinguished reputation in [ 1 . . . . . . . . ].I hold a [s s s high sc4hool, bachelor or master ] degree in[ your m1ajor ] from [s s the name of your high school 1or university] in[s the country you stud1ied ]. where I gained a solid foundation in my major and developed a strong background in [ your m1ajor ] . Moreover, my coursework in [ mentio1n 2-3 relevant courses ]  have deepened my interest in this field '
//     );
//   await page.getByText('[ your m1ajor ]').nth(1).click();
//   await page
//     .getByText(
//       'I am enthusiastic about pursuing my [ 1 ] degree at [ 1 ] in [ 1 ] due to its'
//     )
//     .fill(
//       'I am enthusiastic about pursuing my [ 1 ] degree at [ 1 ] in [ 1 ] due to its distinguished reputation in [ 1 . . . . . . . . . ].I hold a [s s s s high sc4hool, bachelor or master ] degree in[ your m1ajor ] from [s s s the name of your high school 1or university] in[s s the country you stud1ied ]. where I gained a solid foundation in my major and developed a strong background in [s your m1ajor ] . Moreover, my coursework in [ mentio1n 2-3 relevant courses ]  have deepened my interest in this field '
//     );
//   await page.getByText('[ mentio1n 2-3 relevant').click();
//   await page
//     .getByText(
//       'I am enthusiastic about pursuing my [ 1 ] degree at [ 1 ] in [ 1 ] due to its'
//     )
//     .fill(
//       'I am enthusiastic about pursuing my [ 1 ] degree at [ 1 ] in [ 1 ] due to its distinguished reputation in [ 1 . . . . . . . . . . ].I hold a [s s s s s high sc4hool, bachelor or master ] degree in[ your m1ajor ] from [s s s s the name of your high school 1or university] in[s s s the country you stud1ied ]. where I gained a solid foundation in my major and developed a strong background in [s your m1ajor ] . Moreover, my coursework in [s mentio1n 2-3 relevant courses ]  have deepened my interest in this field '
//     );
//   await page.getByRole('button', { name: 'Next' }).click();

//   //第3页没有必填项 第4页必填项前面填过了
//   await page.getByRole('button', { name: 'Next' }).click();
//   await page.getByRole('button', { name: 'Next' }).click();

//   //第5页
//   await page.getByPlaceholder('e.g. Vivinae').click();
//   await page.getByPlaceholder('e.g. Vivinae').fill('1');
//   await page.getByPlaceholder('e.g. Fa').click();
//   await page.getByPlaceholder('e.g. Fa').fill('1');
//   await page.getByPlaceholder('e.g. India').click();
//   await page.getByPlaceholder('e.g. India').fill('1');
//   await page.getByPlaceholder('e.g. 1992.12').click();
//   await page.getByPlaceholder('e.g. 1992.12').fill('1');
//   await page.getByPlaceholder('e.g. 1234567').click();
//   await page.getByPlaceholder('e.g. 1234567').fill('1');
//   await page.getByPlaceholder('e.g. xx@gmail.com').click();
//   await page.getByPlaceholder('e.g. xx@gmail.com').fill('1');
//   await page.getByRole('button', { name: 'Next' }).click();

//   //生成页 切换按钮 & 生成
//   await page.getByText('English').click();
//   await page.getByText('German', { exact: true }).click();
//   await page.getByRole('button', { name: 'right' }).click();
//   await page.getByRole('button', { name: 'right' }).click();
//   await page.locator('#root').getByText('German').click();
//   await page.getByText('English', { exact: true }).click();
//   await page.getByRole('button', { name: 'right' }).click();
//   await page.getByRole('button', { name: 'Generate Document' }).click();
// });
