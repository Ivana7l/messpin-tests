class MessageEditScreen {
  get messageEdit() {
    return $('//*[@resource-id="com.wahrcoder.messpin:id/message_edit"]');
  }
  get buttonSendLockedMessage() {
    return $('//*[@resource-id="com.wahrcoder.messpin:id/unlock_button"]');
  }
  get radiusEdit() {
    return $('//*[@resource-id="com.wahrcoder.messpin:id/radius_edit"]');
  }
  get myLocation() {
    return $('//*[@content-desc="My Location"]');
  }
  get buttonUnlockMessage() {
    return $('//*[@resource-id="com.wahrcoder.messpin:id/unlock_button"]');
  }
  get unlockedMessage() {
    return $(`//*[@text="Unlocked Message"]`);
  }

}

export default new MessageEditScreen();