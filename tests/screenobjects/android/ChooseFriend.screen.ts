class ChooseFriendScreen {
    get chooseFriendElement() {
      return $('//*[@resource-id="com.wahrcoder.messpin:id/users_list"]').$$('android.widget.RelativeLayout');
    }

}

export default new ChooseFriendScreen ();