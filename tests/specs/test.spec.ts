import helpers from "../helpers/helpers";
import { loginUser, logoutUser, addContact, deleteContact } from "../helpers/common";
import HomePageScreen from "../screenobjects/android/HomePage.screen";
import ChooseFriendScreen from "../screenobjects/android/ChooseFriend.screen";
import MessageEditScreen from "../screenobjects/android/MessageEdit.screen";
import FriendsRoomScreen from "../screenobjects/android/FriendsRoom.screen";
import FriendsListScreen from "../screenobjects/android/FriendsList.screen";



describe('Send Message Workflow', () => {

it('Sending message to User A', async () => {
//    await FriendsListScreen.friendsList.$(`//*[@text="${helpers.userAEmail}"]//..//..//*[@resource-id="com.wahrcoder.messpin:id/friend_delete"]`)

    $(`//*[@resource-id="com.wahrcoder.messpin:id/users_list"]//*[@text="${helpers.userAEmail}"]//..//..//*[@resource-id="com.wahrcoder.messpin:id/friend_delete"]`)
})

})

