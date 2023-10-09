class SignUpScreen {
    get nameInputElement() {
      return $('//*[@resource-id="com.wahrcoder.messpin:id/name"]');
    }
    get newPasswordInputElement () {
      return $('//*[@resource-id="com.wahrcoder.messpin:id/password"]');
    }
    get buttonSave () {
      return $('//*[@resource-id="com.wahrcoder.messpin:id/button_create"]');

    }
    get TCagreements () {
      return $('//*[@resource-id="com.wahrcoder.messpin:id/email_footer_tos_and_pp_text"]');

    }
    get nameInputError () {
      return $('//*[@resource-id="com.wahrcoder.messpin:id/textinput_error"]');
    }
    get passwordInputError () {
      return $('//*[@resource-id="com.wahrcoder.messpin:id/textinput_error"]');
    }


}

export default new SignUpScreen ();