class WelcomeBackScreen {
    get passwordInputElement() {
      return $('//*[@resource-id="com.wahrcoder.messpin:id/password"]');
    }
    get buttonDone () {
      return $('//*[@resource-id="com.wahrcoder.messpin:id/button_done"]');
    }
    get TCagreements () {
      return $('//*[@resource-id="com.wahrcoder.messpin:id/email_footer_tos_and_pp_text"]');
    }
    get troubleSignIngIn () {
      return $('//*[@resource-id="com.wahrcoder.messpin:id/trouble_SignIng_in"]');
    }
    get passwordInputError () {
      return $('//*[@resource-id="com.wahrcoder.messpin:id/textinput_error"]');
    }



}


export default new WelcomeBackScreen ();