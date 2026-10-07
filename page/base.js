import {Browser, Builder} from 'selenium-webdriver';

class BasePage{
    constructor(){
        this.driver = new Builder().forBrowser(Browser.CHROME).build();
    }
    
    //browser open from here
    async browserOpen(url){
        await this.driver.get(url);
        await this.driver.manage().window().maximize();
    }
    
    //browser close from here
    async browserClose(){
         await this.driver.quit();
    }
}

export {BasePage};


//await pages.browserClose();
//async vs sync, sync runs one by one. async--> by using await we can go from step one to step 3 and await step 2
//<input id="gender-male" name="Gender" type="radio" value="M">
//            <li><a href="/register" class="ico-register">Register</a></li>