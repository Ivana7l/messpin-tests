import SignInScreen from '../screenobjects/android/SignIn.screen';
import WelcomeBackScreen from '../screenobjects/android/WelcomeBack.screen';
import HomePageScreen from '../screenobjects/android/HomePage.screen';
import helpers from '../helpers/helpers';



describe('SignIn Workflow', () => {
    it('Test empty email input', async () => {

        await SignInScreen.emailInputElement.setValue("");
        await SignInScreen.buttonNext.click();
        await driver.pause(100);
        await expect(SignInScreen.emailInputEmptyError).toExist();
    });

    it('Test invalid email inputs without "@" symbol and domain', async () => {

        await SignInScreen.emailInputElement.setValue("123123");
        await SignInScreen.buttonNext.click();
        await driver.pause(100);
        await expect(SignInScreen.emailInputInvalidError).toExist();

        await SignInScreen.emailInputElement.setValue("$$$$$");
        await SignInScreen.buttonNext.click();
        await driver.pause(100);
        await expect(SignInScreen.emailInputInvalidError).toExist();

        await SignInScreen.emailInputElement.setValue("#####");
        await SignInScreen.buttonNext.click();
        await driver.pause(100);
        await expect(SignInScreen.emailInputInvalidError).toExist();

    });


    it('Test invalid email with invalid characters in username', async () => {

        await SignInScreen.emailInputElement.setValue("te^st@test.com");
        await SignInScreen.buttonNext.click();
        await driver.pause(100);
        await expect(SignInScreen.emailInputInvalidError).toExist();

    });

    it('Test invalid email inputs without "@" symbol', async () => {

        await SignInScreen.emailInputElement.setValue("testtest.com");
        await SignInScreen.buttonNext.click();
        await driver.pause(100);
        await expect(SignInScreen.emailInputInvalidError).toExist();

    });

    it('Test invalid email inputs without domain', async () => {

        await SignInScreen.emailInputElement.setValue("test@.com");
        await SignInScreen.buttonNext.click();
        await driver.pause(100);
        await expect(SignInScreen.emailInputInvalidError).toExist();

    });

    it('Test invalid email inputs without username', async () => {

        await SignInScreen.emailInputElement.setValue("@test.com");
        await SignInScreen.buttonNext.click();
        await driver.pause(100);
        await expect(SignInScreen.emailInputInvalidError).toExist();

    });

    it('Test invalid email inputs with specialized characters in the domain', async () => {

        await SignInScreen.emailInputElement.setValue("test@test'com");
        await SignInScreen.buttonNext.click();
        await driver.pause(100);
        await expect(SignInScreen.emailInputInvalidError).toExist();

        await SignInScreen.emailInputElement.setValue("test@test-com");
        await SignInScreen.buttonNext.click();
        await driver.pause(100);
        await expect(SignInScreen.emailInputInvalidError).toExist();

    });

    it('Test invalid email inputs without dot in the domain', async () => {

        await SignInScreen.emailInputElement.setValue("test@testcom");
        await SignInScreen.buttonNext.click();
        await driver.pause(100);
        await expect(SignInScreen.emailInputInvalidError).toExist();

    });

    it('Test invalid email inputs with consecutive dots in the domain', async () => {

        await SignInScreen.emailInputElement.setValue("test@test.com..");
        await SignInScreen.buttonNext.click();
        await driver.pause(100);
        await expect(SignInScreen.emailInputInvalidError).toExist();

    });

    it('Test invalid email inputs with more than one "@" symbol ', async () => {

        await SignInScreen.emailInputElement.setValue("test@test@test.com");
        await SignInScreen.buttonNext.click();
        await driver.pause(100);
        await expect(SignInScreen.emailInputInvalidError).toExist();

    });

    it('Test valid email input', async () => {

        await SignInScreen.emailInputElement.setValue(helpers.userBEmail);
        await SignInScreen.buttonNext.click();
        await driver.pause(500);

        await expect(WelcomeBackScreen.passwordInputElement).toExist();

    });

    it('Test empty password input', async () => {

        await WelcomeBackScreen.passwordInputElement.setValue("");
        await WelcomeBackScreen.buttonDone.click();
        await driver.pause(100);
        await expect(WelcomeBackScreen.passwordInputError).toExist();

    });

    it('Test invalid password input', async () => {

        await WelcomeBackScreen.passwordInputElement.setValue("test012344");
        await WelcomeBackScreen.buttonDone.click();
        await driver.pause(100);
        await expect(WelcomeBackScreen.passwordInputError).toExist();


        await WelcomeBackScreen.passwordInputElement.setValue("123");
        await WelcomeBackScreen.buttonDone.click();
        await driver.pause(100);
        await expect(WelcomeBackScreen.passwordInputError).toExist();

        await WelcomeBackScreen.passwordInputElement.setValue("....");
        await WelcomeBackScreen.buttonDone.click();
        await driver.pause(100);
        await expect(WelcomeBackScreen.passwordInputError).toExist();

    });

    it('Test valid password input', async () => {

        await WelcomeBackScreen.passwordInputElement.setValue(helpers.userBPassword);
        await WelcomeBackScreen.buttonDone.click();
        await driver.pause(500);

        await expect(HomePageScreen.buttonMessage).toExist();

    });

    it('Test logout', async () => {

        await HomePageScreen.buttonMoreOptions.click();
        await HomePageScreen.buttonSignOut.click();
        await driver.pause(500);

        await expect(SignInScreen.emailInputElement).toExist();
        await expect(SignInScreen.buttonNext).toExist();

    });


});









/*
    it('Test valid input', async () => {
        await SignIn.emailInputElement.setValue("ivana@test.com");
        await SignIn.buttonNext.click();
        await driver.pause(500);

        await expect(SignUp.nameInputElement).toExist();
        await expect(SignUp.newPasswordInputElement).toExist();
    });

    it('Test empty input', async () => {
        await SignIn.emailInputElement.setValue("test02@gmail.com");
        await SignIn.buttonNext.click();
        await driver.pause(100);
        await welcomeBack.passwordInputElement.setValue("");
        await expect(welcomeBack.passwordInputError).toExist();


    });

    it('Test invalid input', async () => {
        await SignIn.emailInputElement.setValue("test02@gmail.com");
        await SignIn.buttonNext.click();
        await driver.pause(100);
        await welcomeBack.passwordInputElement.setValue("test0123");
        await expect(welcomeBack.passwordInputError).toExist();
    });

    it('Test valid input', async () => {
        await SignIn.emailInputElement.setValue("test02@gmail.com");
        await SignIn.buttonNext.click();
        await driver.pause(500);
        await welcomeBack.passwordInputElement.setValue("Test012345");

        await expect(SignUp.nameInputElement).toExist();
        await expect(SignUp.newPasswordInputElement).toExist();
    });
});
*/