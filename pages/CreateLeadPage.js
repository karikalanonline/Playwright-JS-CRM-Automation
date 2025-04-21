import { expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "./DashboardPage";
import BasePageUpdated from "../base/BasePage";
import testData from "../data/testData";
import Logger from "../utils/Logger";

class CreateLeadPage extends BasePageUpdated{
    constructor(page){
        super(page);
        this.companyNameField = "#createLeadForm_companyName";
        this.firstName = "#createLeadForm_firstName";
        this.lastName = "#createLeadForm_lastName";
        this.date = "#createLeadForm_birthDate";
        this.source = "#createLeadForm_dataSourceId";
        this.submitButton = "Input[name='submitButton']";

    }

    async enterCompanyName(){
        Logger.info("Entering the company name");
        await this.fill(this.companyNameField, testData.lead.companyName);
    }

    async enterFirstName(){
        Logger.info("Entering the first name in the 'First Name' field");
        await this.fill(this.firstName, testData.lead.firstName);
    }

    async enterLastName(){
        Logger.info("Entering the last name in the 'Last Name' field");
        await this.page.fill(this.lastName, testData.lead.lastName);
    }

    async selectSource(){
        Logger.info("Selecting the source");
        await this.selectFromDropdown(this.source, testData.lead.source);
    }

    async selectDate(){
        Logger.info("Selecting the Date");
        await this.fill(this.date, testData.lead.birthDate);
    }

    async clickSubmitButton(){
        Logger.info("Clicking the submit button");
        await this.click(this.submitButton);
    }
}

export default CreateLeadPage;
