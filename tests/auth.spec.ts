import { test, expect } from './fixtures';
//import { test, expect } from '@playwright/test';
import path from 'path';


test('should display logged in screen', async ({ page }) => {
  await page.goto('http://localhost:8000');
 
  await page.waitForTimeout(1000);

  const welcomeMessage = await page.locator('[id="welcomeMessage"]');
  await expect(welcomeMessage).toBeVisible();
});
