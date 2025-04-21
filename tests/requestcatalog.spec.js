import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import BasePage from "../base/BasePage";
import HomePage from "../pages/HomePage";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateTo("http://leaftaps.com/opentaps/control/login");
  const dashBoardPage = await loginPage.login("DemoCsr", "crmsfa");
  await dashBoardPage.verifyLoginSuccess();
  await dashBoardPage.clickCrmSfaLink();
  
});

test("Create a Request Catalog", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.clickMainLeads();
  const requestCatalog = await homePage.clickRequestCatalogButton();
  await requestCatalog.enterFirstName();
  await requestCatalog.enterLastName();
  await requestCatalog.enterAddressLine1();
  await requestCatalog.enterCity();
  await requestCatalog.selectState();
  await requestCatalog.enterPostalCode();
  await requestCatalog.enterPostalCodeExt();
  await requestCatalog.selectCountry();
  await requestCatalog.clickReqCatalogSubmitButton();
  await page.pause();
});
