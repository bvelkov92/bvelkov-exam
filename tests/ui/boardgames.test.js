const { test, expect } = require('@playwright/test');

test('Check boardgames page', async ({ page }) => {
    await page.goto('https://bvelkov-exam.onrender.com/boardgames');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  