import HomePage from "../pages/HomePage";
import { test } from "./basetest.spec";

test("Create lead in Test Leaf Platform", async ({ page, dashboardPage }) => {
  const homePage = new HomePage(page);
  await homePage.clickMainLeads();
  const createLeadPage = await homePage.clickCreateLead();
  await createLeadPage.enterCompanyName();
  await createLeadPage.enterFirstName();
  await createLeadPage.enterLastName();
  await createLeadPage.selectDate();
  await createLeadPage.selectSource();
  await createLeadPage.clickSubmitButton();
});
