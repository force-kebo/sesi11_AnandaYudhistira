import { By } from 'selenium-webdriver';

class LoginPage {
    static inputUsername = '//*[@id="user-name"]';
    static inputPassword = '//*[@id="password"]';
    static buttonLogin = '//*[@id="login-button"]';

    static getUsername(driver) {
        return driver.findElement(By.xpath(this.inputUsername));
    }
    static getPassword(driver) {
        return driver.findElement(By.xpath(this.inputPassword));
    }
    static getButtonLogin(driver) {
        return driver.findElement(By.xpath(this.buttonLogin));
    }
}

export default LoginPage;
