import Logger from "../utils/Logger";

export default class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigateTo(url) {
    await this.page.goto(url);
  }

  async click(locator) {
    await this.page.locator(locator).click();
  }

  async fill(locator, text) {
    await this.page.locator(locator).fill(text);
  }

  async getTitle() {
    return await this.page.getTitle();
  }

  async selectFromDropdown(locator, value) {
    await this.page.locator(locator).selectOption(value);
  }
}

