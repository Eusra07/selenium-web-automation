import {By} from 'selenium-webdriver';
import {BasePage} from './base.js';

class LoginPage extends BasePage{

    constructor(){
        super();
        // locators
        this.loginLink = By.xpath("//a[@href='/login']");
        this.email = By.id("Email");
        this.password = By.id("Password");
        this.loginBtn = By.xpath("//input[@value='Log in']");
    }
    
    async clickLoginLink(){
        await this.driver.findElement(this.loginLink).click();
    }


    async enterEmail(email){
        await this.driver.findElement(this.email).sendKeys(email);
    }

    async enterPassword(password){
        await this.driver.findElement(this.password).sendKeys(password);
    }

    async clickLoginBtn(){
        await this.driver.findElement(this.loginBtn).click();
    }

}

export {LoginPage};


//await pages.browserClose();
//async vs sync, sync runs one by one. async--> by using await we can go from step one to step 3 and await step 2
//<input id="gender-male" name="Gender" type="radio" value="M">
//            <li><a href="/register" class="ico-register">Register</a></li>