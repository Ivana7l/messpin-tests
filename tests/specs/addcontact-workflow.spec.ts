import HomePageScreen from '../screenobjects/android/HomePage.screen';
import { registerRandomUser } from '../helpers/common';
import { registerUser } from '../helpers/common';
import helpers from '../helpers/helpers';
import { loginUser, logoutUser } from '../helpers/common';
import FriendsListScreen from '../screenobjects/android/FriendsList.screen';
import SharingLinkScreen from '../screenobjects/android/SharingLink.screen';
import SearchScreen from '../screenobjects/android/Search.screen';



describe('Add Contact Workflow', () => {
    before(async () => {
    });

    after(async () => {
    });

    it('Test add contact', async () => {
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
        await HomePageScreen.buttonMoreOptions.click();
        await HomePageScreen.buttonFriends.click();
        await driver.pause(100);
        await expect($(`//*[@text="${helpers.userAEmail}"]`)).toExist();

    });

    it('Test search contact', async () => {
        await FriendsListScreen.buttonBack.click();
        await HomePageScreen.buttonSearch.click();
        await HomePageScreen.searchInputElement.setValue('Nikola');
        await driver.pause(100);
        await driver.pressKeyCode(66);
        await driver.pause(100);
        await expect(SearchScreen.friendName).toExist();


    });

    it('Test user B should be able delete contact', async () => {
        await FriendsListScreen.buttonBack.click();
        await HomePageScreen.buttonMoreOptions.click();
        await HomePageScreen.buttonFriends.click();
        await FriendsListScreen.friendsList.waitForExist();
        await FriendsListScreen.allDeleteOptions[1].click();
        await driver.pause(100);
        await expect($(`//*[@text="${helpers.userAEmail}"]`)).not.toExist();

    });


    it('Test deleted contact should be deleted on user A list of contact', async () => {
        await logoutUser();
        await loginUser(helpers.userAEmail, helpers.userAPassword);
        await HomePageScreen.buttonMoreOptions.waitForExist();
        await HomePageScreen.buttonMoreOptions.click();
        await HomePageScreen.buttonFriends.click();
        await driver.pause(100);
        await expect($(`//*[@text="${helpers.userBEmail}"]`)).not.toExist();

    });

});







/*
        //login mainUser
        //dohvati link i spremi u varijablu
        //logout mainUser
        //login userB
        //iskoristi deeplink od mainUser
        //assert provjeri jel mainUser ima kontakt userB






        
         await registerRandomUser();
         await driver.pause(5000);
         await HomePageScreen.buttonMoreOptions.click();
         await HomePageScreen.buttonFriends.click();
         await HomePageScreen.buttonAddFriend.click();
         await driver.pause(500);
         // await driver.execute( 'mobile:deepLink', { url: "https://messpin.page.link/MeQRkCxjJZv5qe5W7"});
 */

