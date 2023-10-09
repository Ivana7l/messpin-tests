class SignInScreen {
    get emailInputElement() {
      return $('//*[@resource-id="com.wahrcoder.messpin:id/email"]');
    }
    get buttonNext () {
      return $('//*[@resource-id="com.wahrcoder.messpin:id/button_next"]');
    }
    get emailInputEmptyError () {
      return $('//*[@text="Enter your email address to continue"]');
    }
    get emailInputInvalidError () {
      return $(`//*[@text="That email address isn't correct"]`);
    }
    get TCagreements () {
      return $('//*[@resource-id="com.wahrcoder.messpin:id/email_tos_and_pp_text"]');
    }
    
}

export default new SignInScreen ();