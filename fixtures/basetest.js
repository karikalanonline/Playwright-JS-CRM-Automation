import { test as base } from "@playwright/test";
import LoginPage from "../pages/LoginPage.js";
//import DashboardPage from "../pages/DashboardPage";
//import testData from "../data/testData.js";
import dotenv from 'dotenv';
dotenv.config();

export const test = base.extend({
  dashboardPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo(process.env.base_url);
    const dashboardPage = await loginPage.login(
      process.env.user,
      process.env.password
    );
    await dashboardPage.verifyLoginSuccess();
    await dashboardPage.clickCrmSfaLink();
    await use(dashboardPage);
  },
});