import {By} from 'selenium-webdriver';
import {BasePage} from './base.js';

class SignUpPage extends BasePage{

    constructor(){
        super();
        // locators
        this.registerLink = By.xpath("//a[@href='/register']");
        this.gender = By.id("gender-male");
        this.firstName = By.id("FirstName");
        this.lastName = By.id("LastName");
        this.email = By.name("Email");
        this.password = By.id("Password");
        this.confirmPassword = By.id("ConfirmPassword");
        this.registerBtn = By.id("register-button");
    }
    
    async clickRegisterLink(){
        await this.driver.findElement(this.registerLink).click();
    }

    async clickMaleGender(){
        await this.driver.findElement(this.gender).click();
    }

    async enterFirstName(firstName){
        await this.driver.findElement(this.firstName).sendKeys(firstName);
    }

    async enterLastName(lastName){
        await this.driver.findElement(this.lastName).sendKeys(lastName);
    }

    async enterEmail(email){
        await this.driver.findElement(this.email).sendKeys(email);
    }

    async enterPassword(password){
        await this.driver.findElement(this.password).sendKeys(password);
    }

    async enterConfirmPassword(confirmPassword){
        await this.driver.findElement(this.confirmPassword).sendKeys(confirmPassword);
    }

    async clickRegisterBtn(){
        await this.driver.findElement(this.registerBtn).click();
    }

}

export {SignUpPage};


//await pages.browserClose();
//async vs sync, sync runs one by one. async--> by using await we can go from step one to step 3 and await step 2
//<input id="gender-male" name="Gender" type="radio" value="M">
//            <li><a href="/register" class="ico-register">Register</a></li>