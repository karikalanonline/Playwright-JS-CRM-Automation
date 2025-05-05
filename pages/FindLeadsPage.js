import { expect } from "@playwright/test";
import BasePage from "../base/BasePage";
import testData from "../data/testData";
import Logger from "../utils/Logger";

class FindLeadsPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstName =
      'div.x-form-item.x-tab-item:has(label:has-text("First name:")) input';
    this.lastName =
      'div.x-form-item.x-tab-item:has(label:has-text("Last name:")) input';
    this.findLeadsButton = 'td.x-btn-center:has(button:has-text("Find Leads"))';
    //this.retrievedLead =
    // 'div.x-grid3-col x-grid3-cell x-grid3-td-firstName :has-text("Playwright")';
  }

  async enterFirstName() {
    Logger.info("Entering the first name in the 'First Name' field");
    await this.fill(`${this.firstName}>>nth=0`, testData.lead.firstName);
  }

  async enterLastName() {
    Logger.info("Entering the last name in the 'Last Name' field");
    await this.fill(`${this.lastName}>>nth=0`, testData.lead.lastName);
  }

  async clickFindLeadsButton() {
    Logger.info("Clicking the Find Lead button");
    await this.click(this.findLeadsButton);
  }

  async verifyLeadResult() {
    Logger.info("Verifying the retrieved lead result");
    const lead = await this.page
      .locator(
        'div.x-grid3-cell-inner.x-grid3-col-firstName:has(a:has-text("Playwright"))'
      )
      .nth(0);
    await expect(lead).toBeVisible();
  }
}

export default FindLeadsPage;
