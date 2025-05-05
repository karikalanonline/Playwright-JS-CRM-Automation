import HomePage from "../pages/HomePage.js";
import {test} from "../fixtures/basetest.js";



test("Create a Request Catalog", async ({ page, dashboardPage }) => {
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
});
