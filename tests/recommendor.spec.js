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

test('recommendor_Chinese', async ({ page }) => {});
