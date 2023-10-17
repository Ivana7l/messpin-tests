class FriendsListScreen {
    get buttonDeleteFriend() {
      return $('//*[@resource-id="com.wahrcoder.messpin:id/friend_delete"]');
    }
    get buttonBack() {
      return $('//android.widget.ImageButton[@content-desc="Navigate up"]')
    }
    get buttonAddFriend() {
      return $('//*[@resource-id="com.wahrcoder.messpin:id/fab_add_user"]');
  }

    get allDeleteOptions() {
    return $$ ('//*[@resource-id="com.wahrcoder.messpin:id/users_list"]//*[@resource-id="com.wahrcoder.messpin:id/friend_delete"]');

    //  return $('//*[@resource-id="com.wahrcoder.messpin:id/users_list"]').$$('//*[@resource-id="com.wahrcoder.messpin:id/friend_delete"]')
    }
    get friendsList () {
      return $('//*[@resource-id="com.wahrcoder.messpin:id/users_list"]');
    }

}

export default new FriendsListScreen ();


