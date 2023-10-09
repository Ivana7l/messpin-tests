import SignInScreen from '../screenobjects/android/SignIn.screen';
import WelcomeBackScreen from '../screenobjects/android/WelcomeBack.screen';
import HomePageScreen from '../screenobjects/android/HomePage.screen';
import helpers from '../helpers/helpers';

import {login} from '../helpers/common';


describe('User should be redirected to SignIn page', () => {
    it('Test logout', async () => {
        await login();

        await HomePageScreen.buttonMoreOptions.click();
        await HomePageScreen.buttonSignOut.click();
        await driver.pause(500);

        await expect(SignInScreen.emailInputElement).toExist();
        await expect(SignInScreen.buttonNext).toExist();

    });

    it('Button back should allways redirect to SignIn page', async () => {

        await driver.back();
        await driver.back();
        await driver.pause(2000);

        await expect(SignInScreen.emailInputElement).toExist();
        await expect(SignInScreen.buttonNext).toExist();


    });

});



