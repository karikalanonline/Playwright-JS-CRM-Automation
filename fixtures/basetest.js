import { test as base } from "@playwright/test";
import LoginPage from "../pages/LoginPage.js";
//import DashboardPage from "../pages/DashboardPage";
import testData from "../data/testData.js";

export const test = base.extend({
  dashboardPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo(testData.baseUrl);
    const dashboardPage = await loginPage.login(
      testData.userName,
      testData.password
    );
    await dashboardPage.verifyLoginSuccess();
    await dashboardPage.clickCrmSfaLink();
    await use(dashboardPage);
  },
});