import { Pom } from "../Pom";
import { Wanted } from "../Wanted";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const page = new Pom(driver);

// test data for Mia the Cat
const testData : Wanted = new Wanted (
    "Most Wanted",
    "TX",
    "TestAgncy",
    "Mia",
    "F",
    "C",
    "009",
    "8",
    "Grey",
    "Stolen Heart",
    "02132017",
    "",
    "",
    "",
    "",
    "",
    ""
)


test("Generate A Wanted", async () => {
  await page.navigate();
  await page.setValues(testData);
  await page.doSave();
  expect(await page.getQuery()).toContain("Most Wanted.TX.TestAgncy.Mia.F.C.009.008.Grey.Stolen Heart.02132017......");
});
afterAll(async () => {
  await driver.quit();
});