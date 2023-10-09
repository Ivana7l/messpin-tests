import SignInScreen from "../screenobjects/android/SignIn.screen";
import SignUpScreen from "../screenobjects/android/SignUp.screen";
import WelcomeBackScreen from "../screenobjects/android/WelcomeBack.screen";
import helpers from "./helpers";

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