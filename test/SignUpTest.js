import {SignUpPage} from '../page/SignUpPage.js';

const pages = new SignUpPage();
await pages.browserOpen("https://demowebshop.tricentis.com/");
await pages.clickRegisterLink();
await pages.clickMaleGender();
await pages.enterFirstName("Hamid");
await pages.enterLastName("Kazi");
await pages.enterEmail("hamidkazi@gmail.com");
await pages.enterPassword("123456");
await pages.enterConfirmPassword("123456");
await pages.clickRegisterBtn();
await pages.browserClose();
