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
        return '***REMOVED***';
    }
    get userAPassword() {
        return '***REMOVED***';
    }

    get userBEmail() {
        return '***REMOVED***';
    }
    get userBPassword() {
        return '***REMOVED***';
    }

}

export default new Helpers();