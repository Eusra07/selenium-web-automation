import {LoginPage} from '../page/LoginPage.js';

const loginPage = new LoginPage();
await loginPage.browserOpen("https://demowebshop.tricentis.com/");
await loginPage.clickLoginLink();
await loginPage.enterEmail('hamidkazi@gmail.com');
await loginPage.enterPassword('123456');
await loginPage.clickLoginBtn();
await loginPage.browserClose();