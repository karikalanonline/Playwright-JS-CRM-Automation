import { expect } from "@playwright/test";
import BasePage from "../base/BasePage.js";

class RequestCatalogPage extends BasePage {
      constructor(page){
        super(page);
        this.firstName = 'td input[name="firstName"]';
        this.lastName = 'td input[name="lastName"]'
        this.addressLine1 = 'td input[name="generalAddress1"]';
        this.city = 'td input[name="generalCity"]';
        this.state = '#generalStateProvinceGeoId';
        this.postalCode = 'input[name="generalPostalCode"]';
        this.postalCodeExtension = '#generalPostalCodeExt';
        this.requestCatalogSubmitButton = 'td input.smallSubmit';
        this.country = '#generalCountryGeoId';
        
      }

      async enterFirstName(){
        await this.fill(this.firstName, "Playwright");
      }

      async enterLastName(){
        await this.fill(this.lastName, "Automation");
      }

      async enterAddressLine1(){
        await this.fill(this.addressLine1,"Test");
      }
 
      async enterCity(){
        await this.fill(this.city, "Chennai");
      }

      async selectState(){
        await this.selectFromDropdown(this.state, "AZ");
      }
      
      async enterPostalCode (){
        await this.fill(this.postalCode, "12345");
      }

      async enterPostalCodeExt(){
        await this.fill(this.postalCodeExtension, "123");
      }

      async clickReqCatalogSubmitButton(){
        await this.click(this.requestCatalogSubmitButton);
      }
      
      async selectCountry(){
        await this.selectFromDropdown(this.country, "India");
      }
}
export default RequestCatalogPage;
