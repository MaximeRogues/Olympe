import { test, expect } from '@playwright/test';

test('home page loads', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Olympe/i);
  await expect(page.locator('app-root')).toBeVisible();
});
