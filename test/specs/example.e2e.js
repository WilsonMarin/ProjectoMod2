const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const LandingPage = require('../pageobjects/landingpage');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        
        LandingPage.open();
        browser.setTimeout({ 'pageLoad': 100000 });
        
        LandingPage.getFlightsBtn().click();
        browser.pause('1000');
        //LandingPage.getFromTxtbox().click();
        //LandingPage.getFromTxtbox().setValue('SJO')
        //browser.pause('10000');
        LandingPage.getDepartDateField().click();
        LandingPage.getNextMonthbtn().click();
        LandingPage.getDayOfMonthBtn().click();
        browser.pause('10000');

        //LoginPage.open();
/*
        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');*/
    });
});


