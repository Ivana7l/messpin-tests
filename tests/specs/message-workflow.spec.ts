import helpers from "../helpers/helpers";
import { loginUser, logoutUser, addContact, deleteContact } from "../helpers/common";
import HomePageScreen from "../screenobjects/android/HomePage.screen";
import MessageEditScreen from "../screenobjects/android/MessageEdit.screen";
import FriendsRoomScreen from "../screenobjects/android/FriendsRoom.screen";
import FriendsListScreen from "../screenobjects/android/FriendsList.screen";


describe('Send Message Workflow', () => {

    before(async () => {
        await addContact();
    });



    it('Sending message to User A', async () => {
        await driver.pause(100);
        await driver.setGeoLocation({ latitude: 52.5068042, longitude: 13.0950933 });
        await driver.pause(100);
        await HomePageScreen.buttonMessage.click();
        await driver.pause(5000);
        await FriendsListScreen.friendsList.$(`//*[@text="${helpers.userAEmail}"]`).waitForExist();
        await FriendsListScreen.friendsList.$(`//*[@text="${helpers.userAEmail}"]`).click();
        await MessageEditScreen.messageEdit.setValue('test');
        await MessageEditScreen.myLocation.click();
        await MessageEditScreen.radiusEdit.setValue('50');
        await MessageEditScreen.buttonSendLockedMessage.click();
        await driver.pause(100);
        await expect(FriendsRoomScreen.itemTime).toExist();
    })

    it('Receiving locked message from user B', async () => {
        await logoutUser();
        await loginUser(helpers.userAEmail, helpers.userAPassword);
        await driver.pause(100);
        await HomePageScreen.feedList.$(`//*[@text="${helpers.UserBName}"]`).click();
        await expect(FriendsRoomScreen.message[0]).toExist();

    })

    it('Recipient of the message opening locked message on different location', async () => {
        await driver.pause(100);
        await driver.setGeoLocation({ latitude: 48.779209, longitude: 9.1772152 });
        await driver.pause(100);
        await HomePageScreen.buttonMessage.click();
        await driver.pause(5000);
        await driver.back();
        await driver.pause(300);
        await FriendsRoomScreen.message[0].click();
        await MessageEditScreen.myLocation.click();
        await MessageEditScreen.buttonUnlockMessage.click();
        await expect(FriendsRoomScreen.messageStatus).toExist();

    })

    it('Recipient of the message unlocking locked message on correct location', async () => {
        await driver.back();
        await driver.pause(100);
        await driver.setGeoLocation({ latitude: 52.5068042, longitude: 13.0950933 });
        await driver.pause(100);
        await HomePageScreen.buttonMessage.click();
        await driver.pause(5000);
        await driver.back();
        await driver.pause(300);
        await FriendsRoomScreen.message[0].click();
        await MessageEditScreen.myLocation.click();
        await driver.pause(1000);
        await MessageEditScreen.buttonUnlockMessage.click();
        await expect(FriendsRoomScreen.messageContent).toHaveText('test');
    })

    it('Sender of the message unlocking locked message', async () => {
        await FriendsListScreen.buttonBack.click();
        await driver.setGeoLocation({ latitude: 52.5068042, longitude: 13.0950933 });
        await HomePageScreen.buttonMessage.click();
        await MessageEditScreen.messageEdit.setValue('test2');
        await MessageEditScreen.myLocation.click();
        await MessageEditScreen.radiusEdit.setValue('50');
        await MessageEditScreen.buttonSendLockedMessage.click();
        await FriendsRoomScreen.message[0].click();
        await MessageEditScreen.buttonUnlockMessage.click();
        await expect(MessageEditScreen.unlockedMessage).toExist();
    })

    it('Recepient of the message received unlocked message', async () => {
        await logoutUser();
        await loginUser(helpers.userBEmail, helpers.userBPassword);
        await HomePageScreen.feedList.$(`//*[@text="${helpers.userAName}"]`).waitForExist();
        await HomePageScreen.feedList.$(`//*[@text="${helpers.userAName}"]`).click();
        await FriendsRoomScreen.message[0].click();
        await expect(MessageEditScreen.unlockedMessage).toExist();
    })


    after(async () => {
        await driver.pause(1000);
        await deleteContact();
        await driver.pause(3000);
        await logoutUser();

    })
})

