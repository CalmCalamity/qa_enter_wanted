import { By, until, WebDriver } from "selenium-webdriver";
import { Wanted } from "./Wanted";

export class Pom {
    driver: WebDriver;
    url: string = "https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html";
    header: By = By.name("hdrInput");
    mke: By = By.name("mkeInput");
    oai: By = By.name("oriInput");
    name: By = By.name("namInput");
    sex: By = By.name("sexInput");
    race: By = By.name("racInput");
    height: By = By.name("hgtInput");
    weight: By = By.name("wgtInput");
    hair: By = By.name("haiInput");
    offense: By = By.name("offInput");
    violationDate: By = By.name("dowInput");
    driversLicense: By = By.name("olnInput");
    dlState: By = By.name("olsInput");
    dlExpiration: By = By.name("olyInput");
    licensePlate: By = By.name("licInput");
    licenseState: By = By.name("lisInput");
    licenseYear: By = By.name("liyInput");
    submit: By = By.id("saveBtn");
    clear: By = By.id("clearBtn");
    query: By = By.name("queryBody");
  
    constructor(driver: WebDriver) {
      this.driver = driver;
    }

    // method to open url and check for existing elements
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.header));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.header)));
      }
    

    async setValues(wanted: Wanted) {
        await this.driver.findElement(this.header).sendKeys(wanted.header);
        await this.driver.findElement(this.mke).sendKeys(wanted.mke);
        await this.driver.findElement(this.oai).sendKeys(wanted.oai);
        await this.driver.findElement(this.name).sendKeys(wanted.name);
        await this.driver.findElement(this.sex).sendKeys(wanted.sex);
        await this.driver.findElement(this.race).sendKeys(wanted.race);
        await this.driver.findElement(this.height).sendKeys(wanted.height);
        await this.driver.findElement(this.weight).sendKeys(wanted.weight);
        await this.driver.findElement(this.hair).sendKeys(wanted.hair);
        await this.driver.findElement(this.offense).sendKeys(wanted.offense);
        await this.driver.findElement(this.violationDate).sendKeys(wanted.violationDate);
        await this.driver.findElement(this.driversLicense).sendKeys(wanted.driversLicense);
        await this.driver.findElement(this.dlState).sendKeys(wanted.dlState);
        await this.driver.findElement(this.dlExpiration).sendKeys(wanted.dlExpiration);
        await this.driver.findElement(this.licensePlate).sendKeys(wanted.licensePlate);
        await this.driver.findElement(this.licenseState).sendKeys(wanted.licenseState);
        await this.driver.findElement(this.licenseYear).sendKeys(wanted.licenseYear);
    }

    // clicks the save button
    async doSave() {
        return this.driver.findElement(this.submit).click();
    }

    // clicks the clear button
    async doClear() {
        return this.driver.findElement(this.clear).click();
    }

    // method to check the results on the page
    // uses getText method
    async getQuery() {
        return this.getText(this.query);
    }

    // method to enter text
    async sendKeys(locator: By, text) {
        await this.driver.wait(until.elementLocated(locator));
        return this.driver.findElement(locator).sendKeys(text);
    }

    // method to return text
    async getText(locator: By) {
        await this.driver.wait(until.elementLocated(locator));
        return (await this.driver.findElement(locator)).getText();
    }
}