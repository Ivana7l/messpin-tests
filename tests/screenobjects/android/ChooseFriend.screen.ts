class ChooseFriendScreen {
    get chooseFriendElement() {
      return $('//*[@resource-id="com.wahrcoder.messpin:id/users_list"]').$$('android.widget.RelativeLayout');
    }
    get userList() {
      return $('//*[@resource-id="com.wahrcoder.messpin:id/users_list"]');
    }

}

export default new ChooseFriendScreen ();