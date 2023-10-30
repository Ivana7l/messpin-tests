class FriendsRoomScreen {
    get friendsMessages () {
    return $('//*[@resource-id="com.wahrcoder.messpin:id/room_list_rv"]');
    }

    get itemTime () {
    return $('//*[@text="0 minutes ago"]');
    }

    get message () {
    return $('//*[@resource-id="com.wahrcoder.messpin:id/room_list_rv"]').$$('android.widget.RelativeLayout');   
    }

    get messageContent () {
        return $('//*[@resource-id="com.wahrcoder.messpin:id/message_view"]');
    }
    
    get messageStatus () {
        return $('//*[@text="Content locked. Proceed to the location shown on the map and click the unlock button."]');
    }



}

export default new FriendsRoomScreen();