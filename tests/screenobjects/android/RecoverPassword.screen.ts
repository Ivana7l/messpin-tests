class RecoverPasswordScreen {
  get buttonSend() {
    return $('//*[@resource-id="com.wahrcoder.messpin:id/button_done"]');
  }
  get buttonOK() {
    return $('//*[@resource-id="android:id/button1"]');
  }
  get emailInputElement() {
    return $('//*[@resource-id="com.wahrcoder.messpin:id/email"]');
  }


}

export default new RecoverPasswordScreen();