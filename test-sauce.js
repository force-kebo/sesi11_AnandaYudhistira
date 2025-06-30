import { Builder, By, until } from 'selenium-webdriver';
import assert from 'assert';
import firefox from 'selenium-webdriver/firefox.js';
import chrome from 'selenium-webdriver/chrome.js';
import login_page from './pages/login_page.js';
import main_page from './pages/main_page.js';

import fs from 'fs';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import { buffer } from 'stream/consumers';

['firefox', 'chrome'].forEach(function (browser) {
    describe(`Tests on ${browser}`, async function () {
        let driver;

        before(async function () {
            if (browser === 'firefox') {
                let options = new firefox.Options();
                options.addArguments('--incognito');
                driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
                await driver.manage().window().setRect({ width: 1920, height: 1080 });
            } else if (browser === 'chrome') {
                let options = new chrome.Options();
                options.addArguments('--incognito');
                driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
                await driver.manage().window().setRect({ width: 1920, height: 1080 });
            }
        });

        after(async function () {
            if (driver) {
                await driver.quit();
            }
        });

        it('Visit SauceDemo dan cek page title', async function () {
            await driver.get('https://www.saucedemo.com/');
            const title = await driver.getTitle();
            assert.strictEqual(title, 'Swag Labs');

            let inputUsernamePOM = await login_page.getUsername(driver);
            await driver.wait(until.elementIsVisible(inputUsernamePOM), 5000);

            let inputPasswordPOM = await login_page.getPassword(driver);
            await driver.wait(until.elementIsVisible(inputPasswordPOM), 5000);

            let buttonLoginPOM = await login_page.getButtonLogin(driver);
            await driver.wait(until.elementIsVisible(buttonLoginPOM), 5000);

            await inputUsernamePOM.sendKeys('standard_user')
            await inputPasswordPOM.sendKeys('secret_sauce')
            await buttonLoginPOM.click()

            await driver.sleep(1000)

            let buttonOptionPOM = await main_page.getButonOption(driver);
            await driver.wait(until.elementIsVisible(buttonOptionPOM), 5000);
            await buttonOptionPOM.click()

            await driver.sleep(1000)

            let buttonOptionSelectPOM = await main_page.getButonOptionSelect(driver);
            await driver.wait(until.elementIsVisible(buttonOptionSelectPOM), 5000);
            await buttonOptionSelectPOM.click()

            await driver.sleep(1000)

            let buttonAddToCartPOM = await main_page.getButtonAddToCart(driver);
            await driver.wait(until.elementIsVisible(buttonAddToCartPOM), 5000);
            await buttonAddToCartPOM.click()

            await driver.sleep(1000)

            let buttonShoppingCartPOM = await main_page.getButtonShoppingCart(driver);
            await driver.wait(until.elementIsVisible(buttonShoppingCartPOM), 5000);
            await buttonShoppingCartPOM.click()

            await driver.sleep(1000)

            let buttonRemoveCartPOM = await main_page.getButonRemoveCart(driver);
            await driver.wait(until.elementIsVisible(buttonRemoveCartPOM), 5000);
            await buttonRemoveCartPOM.click()

            await driver.sleep(1000)

            let buttonContinueShoppingPOM = await main_page.getButonContinueShopping(driver);
            await driver.wait(until.elementIsVisible(buttonContinueShoppingPOM), 5000);
            await buttonContinueShoppingPOM.click()

            await driver.sleep(5000)

            let ss_full = await driver.takeScreenshot();
            fs.writeFileSync("full_ss.png", Buffer.from(ss_full, "base64"))

            if (!fs.existsSync("baseline.png")) {
                fs.copyFileSync("full_ss.png", "baseline.png");
                console.log("Baseline image saved.");
                return;
            }
            let img1 = PNG.sync.read(fs.readFileSync("baseline.png"));
            let img2 = PNG.sync.read(fs.readFileSync("full_ss.png"));

            if (img1.width !== img2.width || img1.height !== img2.height) {
                console.error(`Error: Image sizes do not match. Baseline image is ${img1.width}x${img1.height}, but current screenshot is ${img2.width}x${img2.height}.`);
                // Optionally recreate baseline.png to match current screenshot
                // fs.copyFileSync("full_ss.png", "baseline.png");
                // console.log("Baseline image recreated to match current screenshot.");
                return;
            }

            let { width, height } = img1;
            let diff = new PNG({ width, height });

            let numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.1 });

            fs.writeFileSync("diff.png", PNG.sync.write(diff));

            if (numDiffPixels > 0) {
                console.log(`Visual differences found! Pixels different: ${numDiffPixels}`);
            } else {
                console.log("No visual differences found.");
            }
    });
});
});
