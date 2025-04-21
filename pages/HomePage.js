import{expect} from "@playwright/test";
import BasePageUpdated from "../base/BasePage";
import Logger from "../utils/Logger";
import CreateLeadPage from "./CreateLeadPage";
import FindLeadsPage from "./FindLeadsPage";
import RequestCatalogPage from "./RequestCatalogPage";

class HomePage extends BasePageUpdated {
    constructor(page){
        super(page);
        this.mainLeadButton = 'a[href^="/crmsfa/control/leadsMain"]';
        this.createLeadButton = 'li a[href^="/crmsfa/control/createLeadForm"]';
        this.findLeadButton = 'li a[href^="/crmsfa/control/findLeads"]';
        this.requestCatalogButton = 'li a[href^="/crmsfa/control/createCatalogRequestForm"]';
        this.testLeafImage = 'a img[alt = "opentaps CRM"]'

    
    }

    async verifyHomePage(){
        await expect(this.page.locator(this.testLeafImage)).toBeVisible();
    }

    async clickMainLeads(){
        Logger.info("Clicking the Main Leads Button");
        await this.click(this.mainLeadButton);
    }

    async clickCreateLead(){
        Logger.info("Clicking the Create Lead button");
        await this.click(this.createLeadButton);
        return new CreateLeadPage(this.page);
    }

    async clickFindLead(){
        Logger.info("Clicking the Find Lead button");
        await this.click(this.findLeadButton);
        await this.page.waitForLoadState("domcontentloaded");
        return new FindLeadsPage(this.page);
    }

    async clickRequestCatalogButton(){
        Logger.info("Clicking the Request Catalog button");
        await this.click(this.requestCatalogButton);
        return new RequestCatalogPage(this.page);
        
    }
}

export default HomePage;