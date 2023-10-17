import SignInScreen from '../screenobjects/android/SignIn.screen';
import HomePageScreen from '../screenobjects/android/HomePage.screen';
import SignUpScreen from '../screenobjects/android/SignUp.screen';
import helpers from '../helpers/helpers';
import { signUpRandom } from '../helpers/common';



describe('Register Workflow', () => {


    it('Test empty name and empty password input', async () => {
        await signUpRandom();
        await SignUpScreen.nameInputElement.setValue("");
        await SignUpScreen.newPasswordInputElement.setValue("");
        await SignUpScreen.buttonSave.click();
        await driver.pause(100);
        await expect(SignUpScreen.nameInputElement).toExist();
        await expect(SignUpScreen.passwordInputError).toExist();


    });

    it('Test empty name input', async () => {

        await SignUpScreen.nameInputElement.setValue("");
        await SignUpScreen.newPasswordInputElement.setValue(helpers.randomPassword);
        await SignUpScreen.buttonSave.click();
        await driver.pause(100);
        await expect(SignUpScreen.nameInputError).toExist();
    });

    it('Test empty password input', async () => {

        await SignUpScreen.nameInputElement.setValue(helpers.randomName);
        await SignUpScreen.newPasswordInputElement.setValue("");
        await SignUpScreen.buttonSave.click();
        await driver.pause(100);
        await expect(SignUpScreen.passwordInputError).toExist();


    });

    it('Test invalid password input', async () => {

        await SignUpScreen.nameInputElement.setValue(helpers.randomName);
        await SignUpScreen.newPasswordInputElement.setValue("123");
        await SignUpScreen.buttonSave.click();
        await driver.pause(100);
        await expect(SignUpScreen.passwordInputError).toExist();

        await SignUpScreen.nameInputElement.setValue(helpers.randomName);
        await SignUpScreen.newPasswordInputElement.setValue("....");
        await SignUpScreen.buttonSave.click();
        await driver.pause(100);
        await expect(SignUpScreen.passwordInputError).toExist();


    });


    it('Test valid name and password input', async () => {

        await SignUpScreen.nameInputElement.setValue(helpers.randomName);
        await SignUpScreen.newPasswordInputElement.setValue(helpers.randomPassword);
        await SignUpScreen.buttonSave.click();
        await driver.pause(500);
        await expect(HomePageScreen.buttonMessage).toExist();
        await expect(HomePageScreen.homePage).toExist();


    });

    it('Test Sign out', async () => {

        await HomePageScreen.buttonMoreOptions.click();
        await HomePageScreen.buttonSignOut.click();
        await driver.pause(500);
        await expect(SignInScreen.emailInputElement).toExist();
    });



})