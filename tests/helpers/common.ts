import SignInScreen from "../screenobjects/android/SignIn.screen";
import SignUpScreen from "../screenobjects/android/SignUp.screen";
import WelcomeBackScreen from "../screenobjects/android/WelcomeBack.screen";
import helpers from "./helpers";
import HomePageScreen from "../screenobjects/android/HomePage.screen";

export let login = async () => {
    await SignInScreen.emailInputElement.setValue(helpers.userBEmail);
    await SignInScreen.buttonNext.click();
    await WelcomeBackScreen.passwordInputElement.setValue(helpers.userBPassword);
    await WelcomeBackScreen.buttonDone.click();

}

export let signUpRandom = async () => {
    await SignInScreen.emailInputElement.setValue(helpers.randomEmail);
    await SignInScreen.buttonNext.click();
}

export let registerRandomUser = async () => {
    await signUpRandom();
    await SignUpScreen.nameInputElement.setValue(helpers.randomName);
    await SignUpScreen.newPasswordInputElement.setValue(helpers.randomPassword);
    await SignUpScreen.buttonSave.click();

}
export let registerUser = async (username,email,password) => {
    await SignInScreen.emailInputElement.setValue(email);
    await SignInScreen.buttonNext.click();
    await SignUpScreen.nameInputElement.setValue(username);
    await SignUpScreen.newPasswordInputElement.setValue(password);
    await SignUpScreen.buttonSave.click();
    await driver.pause(5000);
    await logoutUser();
}
export let logoutUser = async () => {
    await HomePageScreen.buttonMoreOptions.click();
    await HomePageScreen.buttonSignOut.click();
}

export let loginUser = async (email,password) => {
    await SignInScreen.emailInputElement.setValue(email);
    await SignInScreen.buttonNext.click();
    await WelcomeBackScreen.passwordInputElement.setValue(password);
    await WelcomeBackScreen.buttonDone.click();
    await HomePageScreen.homePage.waitForExist();
}