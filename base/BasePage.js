import Logger from "../utils/Logger";

export default class BasePage {
  constructor(page) {
    this.page = page;
  }

  async retryAction(actionFn, retries = 2, delay = 1000) {
    for (let i = 0; i <= retries; i++) {
      try {
        return await actionFn();
      } catch (error) {
        Logger.warn(`Retry ${i + 1} failed. Error: ${error.message}`);
        if (i < retries) await this.page.waitForTimeout(delay);
        else throw error;
      }
    }
  }

  async navigateTo(url) {
    Logger.info(`Navigating to ${url}`);
    await this.page.goto(url);
  }

  async click(locator) {
    Logger.info(`Clicking on the element : ${locator}`);
    await this.retryAction(() => this.page.locator(locator).click());
  }

  async fill(locator, text) {
    Logger.info(`Filling up the ${text} in the element ${locator}`);
    await this.retryAction(() => this.page.locator(locator).fill(text));
  }

  async getTitle() {
    return await this.page.getTitle();
  }

  async selectFromDropdown(locator, value) {
    Logger.info(`Selecting the dropdown value on the element: ${locator}`);
    await this.retryAction(() =>
      this.page.locator(locator).selectOption(value)
    );
  }
}
