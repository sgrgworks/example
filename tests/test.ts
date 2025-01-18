import { page } from "$app/state";
import { expect, test } from "@playwright/test";

test("index page has extpected h1", async ({ page }) => {
  await page.goto("/");
  expect(await page.textContent("h1")).toBe("Helllo world");
});