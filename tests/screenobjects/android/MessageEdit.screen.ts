class MessageEditScreen {
    get messageEdit () {
      return $('//*[@resource-id="com.wahrcoder.messpin:id/message_edit"]');
    }
    get buttonSendLockedMessage () {
        return $('//*[@resource-id="com.wahrcoder.messpin:id/unlock_button"]');
    }

}

export default new MessageEditScreen ();