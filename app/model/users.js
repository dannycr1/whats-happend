// Shared User Constructor
bubleApp.factory("User", function () {
    function User(plainObject) {
        this.email = plainObject.email;
        this.password = plainObject.password;
        this.firstName = plainObject.firstName;
        this.lastName = plainObject.lastName;
        this.data = plainObject.data;
        this.align = plainObject.align;
        this.userName = plainObject.userName;
        this.styleSet = "1";

    };

    return User;
});

// Service that manges the active user
bubleApp.factory("activeUser", function (User) {
    var activeuser = null;

    var isLoggedIn = function () {
        return activeuser ? true : false;
    };

    var login = function (loggedInUser) {
        activeuser = loggedInUser;
    };

    var logout = function () {
        activeuser = null;
    };

    var get = function () {
        return activeuser;
    };

    var add = function (user) {
        userArr.push(user);
    }

    var update = function (index, user) {
        userArr[index] = user;
    }

    var remove = function (index) {
        userArr.splice(index, 1);
    }

    var load = function (userPlainObjectArr) {
        for (var i = 0; i < userPlainObjectArr.length; i++) {
            userArr.push(new Buble(userPlainObjectArr[i]))
        }
    }

    var getAll = function () {
        return userArr;
    }

    var getDisplay = function (index) {
        return userArr[index];
    }

    var removeAll = function () {
        userArr = [];
    }

    return {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        get: get,
        add: add,
        update: update,
        remove: remove,
        load: load,
        getAll: getAll,
        getDisplay: getDisplay,
        removeAll: removeAll,
    };
});

bubleApp.factory("users", function (User) {
    var userArr = [];

    var add = function (user) {
        userArr.push(user);
    }

    var update = function (index, user) {
        userArr[index] = user;
    }

    var updateStyleSet = function (index, style) {
        userArr[index].styleSet = style;
    }

    var remove = function (index) {
        userArr.splice(index, 1);
    }

    var load = function (userPlainObjectArr) {
        for (var i = 0; i < userPlainObjectArr.length; i++) {
            userArr.push(new User(userPlainObjectArr[i]))
        }
    }

    var getAll = function () {
        return userArr;
    }

    var get = function (index) {
        return userArr[index];
    }

    var getName = function (index) {
        return userArr[index].userName;
    }

    var removeAll = function () {
        userArr = [];
    }

    return {
        add: add,
        update: update,
        remove: remove,
        load: load,
        getAll: getAll,
        get: get,
        removeAll: removeAll,
        getName: getName,
        updateStyleSet: updateStyleSet


    }

});