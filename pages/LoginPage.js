import BasePage from "../base/BasePage.js";
import DashboardPage from "../pages/DashboardPage.js";
import Logger from "../utils/Logger.js";




class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameField = "#username";
    this.passwordField = "#password";
    this.loginButton = "input[class='decorativeSubmit']";
  }

  async login(username, password) {
    Logger.info("Starting login process")
    await this.fill(this.usernameField, username);
    await this.fill(this.passwordField, password);
    await this.click(this.loginButton);
    return new DashboardPage(this.page);
  }
}

export default LoginPage;
