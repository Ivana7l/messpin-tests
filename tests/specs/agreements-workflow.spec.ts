import SignInScreen from "../screenobjects/android/SignIn.screen";
import HomePageScreen from "../screenobjects/android/HomePage.screen";
import SignUpScreen from "../screenobjects/android/SignUp.screen";
import helpers from "../helpers/helpers";
import { signUpRandom, registerRandomUser, logoutUser } from "../helpers/common";
import AgreementsScreen from "../screenobjects/android/Agreements.screen";



describe('Terms workflow', () => {

    before(async () => {
        await registerRandomUser();
    });

    it('Read Privacy Policy after registration', async () => {
        await driver.pause(100);
        await HomePageScreen.buttonMoreOptions.click();
        await HomePageScreen.buttonPrivacyPolicy.click();
        await expect(AgreementsScreen.PrivacyPolicy).toExist();
        await driver.back();
    })


    after(async () => {
        await logoutUser();
    });
  
})


