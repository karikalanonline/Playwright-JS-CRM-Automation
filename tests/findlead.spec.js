import { test } from "./basetest.spec";
import HomePage from "../pages/HomePage";

test("Find Leads", async ({ page, dashboardPage }) => {
  const homePage = new HomePage(page);
  await homePage.clickMainLeads();
  const findLeadsPage = await homePage.clickFindLead();
  await findLeadsPage.enterFirstName();
  await findLeadsPage.enterLastName();
  await findLeadsPage.clickFindLeadsButton();
  await findLeadsPage.verifyLeadResult();
});
