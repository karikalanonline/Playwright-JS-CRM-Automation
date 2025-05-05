import { test} from "../fixtures/basetest.js";
import HomePage from "../pages/HomePage.js";


test("verify the user landed on the home page", async ({ page, dashboardPage }) => {
  const homePage = new HomePage(page);
  await homePage.verifyHomePage();
});

