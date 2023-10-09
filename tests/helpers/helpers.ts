class Helpers {
    get randomEmail() {
        return 'messpin-test-' + Math.random() + '@test.com';
    }
    get userAEmail() {
        return '***REMOVED***';
    }
    get userBEmail() {
        return '***REMOVED***';
    }
    get randomName() {
        return 'messpin-test-' + Math.random();
    }
    get randomPassword() {
        return Math.random() + 'AS22mn';
    }
    get userAPassword() {
        return '***REMOVED***';
    }
    get userBPassword() {
        return '***REMOVED***';
    }



}

export default new Helpers();