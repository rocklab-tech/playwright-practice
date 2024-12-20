import { test, expect } from "@playwright/test";

test("visit the app under test", async ({ page }) => {
  await page.goto("http://localhost:4200");
  await expect(page).toHaveTitle(/playwright-test/);
  await expect(page).toHaveURL("http://localhost:4200/pages/iot-dashboard");
});
