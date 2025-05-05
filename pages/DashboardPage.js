import{expect} from '@playwright/test';
import BasePage from '../base/BasePage.js';

class DashboardPage extends BasePage {
    constructor(page){
        super(page);
        this.successMessage = this.page.locator('h2', {hasText:"Welcome Demo B2B CSR"})
    }

    
    async verifyLoginSuccess(){
       await expect(this.successMessage).toHaveText("Welcome Demo B2B CSR");
    }

    async clickCrmSfaLink(){
        await this.click('#label a');
        await this.page.waitForLoadState("domcontentloaded");
    }
}

export default DashboardPage;
