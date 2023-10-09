class FriendsListScreen {
    get buttonDeleteFriend() {
      return $('//*[@resource-id="com.wahrcoder.messpin:id/friend_delete"]');
    }
    get buttonBack() {
      return $('//android.widget.ImageButton[@content-desc="Navigate up"]')
    }


    get allDeleteOptions() {
     return $$ ('//*[@resource-id="com.wahrcoder.messpin:id/users_list"]//*[@resource-id="com.wahrcoder.messpin:id/friend_delete"]');

      //return $('//*[@resource-id="com.wahrcoder.messpin:id/users_list"]').$$('//*[@resource-id="com.wahrcoder.messpin:id/friend_delete"]')
    }
}

export default new FriendsListScreen ();


