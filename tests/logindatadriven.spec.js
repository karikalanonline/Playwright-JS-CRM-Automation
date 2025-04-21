import { test } from "@playwright/test";
import loginUsers from "../data/testdataLogin";
import LoginPage from "../pages/LoginPage";
import BasePageUpdated from "../base/BasePageUpdates";
import testData from "../data/testData";

loginUsers.forEach(({ userName, password }) => {
  test(`login with the ${userName}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo(testData.baseUrl);
    const dashboardPage = await loginPage.login(userName, password);
    await dashboardPage.verifyLoginSuccess();
    await dashboardPage.clickCrmSfaLink();
  });
});
