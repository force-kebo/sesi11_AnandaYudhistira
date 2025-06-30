import { By } from 'selenium-webdriver';

class mainPage {
    static buttonOption = '*[data-test="product-sort-container';
    static buttonOptionSelect = '//*[@id="header_container"]/div[2]/div/span/select/option[2]';
    static buttonAddToCart = 'add-to-cart-test.allthethings()-t-shirt-(red)';
    static buttonShoppingCart = '//*[@id="shopping_cart_container"]/a';
    static buttonRemoveCart = '//*[@id="remove-test.allthethings()-t-shirt-(red)"]';
    static buttonContinueShopping = '//*[@id="continue-shopping"]';

    static getButonOption(driver) {
        return driver.findElement(By.css(this.buttonOption));
    }
    static getButonOptionSelect(driver) {
        return driver.findElement(By.xpath(this.buttonOptionSelect));
    }
    static getButtonAddToCart(driver) {
        return driver.findElement(By.id(this.buttonAddToCart));
    }
    static getButtonShoppingCart(driver) {
        return driver.findElement(By.xpath(this.buttonShoppingCart));
    }
    static getButonRemoveCart(driver) {
        return driver.findElement(By.xpath(this.buttonRemoveCart));
    }
    static getButonContinueShopping(driver) {
        return driver.findElement(By.xpath(this.buttonContinueShopping));
    }
}

export default mainPage;