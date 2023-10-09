class HomePageScreen {
    get buttonMoreOptions() {
       // return $('//*[@resource-id="com.wahrcoder.messpin:id/toolbar"]').$('//*[@content-desc="More options"]');
      return $('android.view.ViewGroup').$('//*[@content-desc="More options"]');
    }
    get buttonSignOut () {
      return $('android.widget.ListView').$('//*[@text="Sign Out"]');
      //$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[4]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.TextView');
    }
    get buttonfriendsList() {
        return $('android.widget.ListView').$('//*[@text="friendsList"]');
        // return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.RelativeLayout[2]/android.widget.LinearLayout[2]/android.widget.Button');
    }
    get buttonSearch() {
        return $('//*[@resource-id="android:id/search_button"]');
    }
    get searchInputElement() {
        return $('//*[@resource-id="android:id/search_src_text"]');
    }
    get buttonPrivacyPolicy() {
        return $('android.widget.ListView').$('//*[@text="Privacy Policy"]');
        //return  $('//*[@resource-id="com.wahrcoder.messpin:id/title"]');

    }
    get buttonTermsAndConditions() {
        return $('android.widget.ListView').$('//*[@text="Terms and Conditions"]');
        //return $('//*[@resource-id="com.wahrcoder.messpin:id/title"]');

    }
    get buttonMessage() {
        return $('//*[@resource-id="com.wahrcoder.messpin:id/fab"]');
    }
    
    get buttonAddFriend() {
        return $('//*[@resource-id="com.wahrcoder.messpin:id/fab_add_user"]');
    }
    get HomePage() {
        return $('//*[@resource-id="com.wahrcoder.messpin:id/content_main"]');
    }




}

export default new HomePageScreen ();