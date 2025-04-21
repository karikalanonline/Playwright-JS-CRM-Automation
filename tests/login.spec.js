import { test} from "./basetest.spec";
import HomePage from "../pages/HomePage";


test("verify the user landed on the home page", async ({ page, dashboardPage }) => {
  const homePage = new HomePage(page);
  await homePage.verifyHomePage();
});

