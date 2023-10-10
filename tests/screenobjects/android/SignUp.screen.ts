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
      return $('//*[@text="Please enter a first and last name."]');
    }
    get passwordInputError () {
      return $('//*[@text="Password not strong enough. Use at least 6 characters and a mix of letters and numbers"]');
    }


}

export default new SignUpScreen ();