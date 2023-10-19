import { userAEmail, userAPassword, userBEmail, userBPassword } from "./credentials";

class Helpers {
    get randomEmail() {
        return 'messpin-test-' + Math.random() + '@test.com';
    }
    get randomPassword() {
        return Math.random() + 'AS22mn';
    }
    get randomName() {
        return 'messpin-test-' + Math.random();
    }

    get userAEmail() {
        return userAEmail;
    }
    get userAPassword() {
        return userAPassword;
    }

    get userBEmail() {
        return userBEmail;
    }
    get userBPassword() {
        return userBPassword;
    }

}

export default new Helpers();