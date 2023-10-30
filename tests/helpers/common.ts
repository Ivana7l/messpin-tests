import SignInScreen from "../screenobjects/android/SignIn.screen";
import SignUpScreen from "../screenobjects/android/SignUp.screen";
import WelcomeBackScreen from "../screenobjects/android/WelcomeBack.screen";
import helpers from "./helpers";
import HomePageScreen from "../screenobjects/android/HomePage.screen";
import FriendsListScreen from "../screenobjects/android/FriendsList.screen";
import SharingLinkScreen from "../screenobjects/android/SharingLink.screen";



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

export let addContact = async () => {
    await loginUser(helpers.userAEmail, helpers.userAPassword);
    await HomePageScreen.buttonMoreOptions.waitForExist();
    await HomePageScreen.buttonMoreOptions.click();
    await HomePageScreen.buttonFriends.click();
    await FriendsListScreen.buttonAddFriend.click();
    await driver.pause(500);
    let link = await SharingLinkScreen.sharingLinkValue;
    await driver.back();
    await logoutUser();
    await loginUser(helpers.userBEmail, helpers.userBPassword);
    await driver.pause(2000);
    await driver.closeApp();
    await driver.pause(1000);
    await driver.execute('mobile:deepLink', { url: link, package: 'com.wahrcoder.messpin' });
    await driver.pause(2000);
 
    
}

export let deleteContact = async () => {
    await driver.closeApp();
    await driver.launchApp(),
    await HomePageScreen.buttonMoreOptions.click();
    await HomePageScreen.buttonFriends.click();
    await FriendsListScreen.friendsList.waitForExist();
    await FriendsListScreen.allDeleteOptions[0].click();
}