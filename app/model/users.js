// Shared User Constructor
bubleApp.factory("User", function () {
    function User(plainObject) {
        this.email = plainObject.email;
        this.password = plainObject.password;
        this.firstName = plainObject.firstName;
        this.lastName = plainObject.lastName;
        this.data = plainObject.data;
        this.align = plainObject.align;
        this.user = plainObject.user;
    };

    return User;
});

// Service that manges the active user
bubleApp.factory("activeUser", function (User) {
    var user = null;

    var isLoggedIn = function () {
        return user ? true : false;
    };

    var login = function (loggedInUser) {
        user = loggedInUser;
    };

    var logout = function () {
        user = null;
    };

    var get = function () {
        return user;
    };

    var getAlign = function () {
        return user.align;
    };

    return {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        get: get,
        getAlign: getAlign
    };
});

bubleApp.factory("displayUser", function (User) {


    var getAlign = function (user) {

        console.log(" in display user function   " + user);
        var align = "center";
        console.log(" in display User    " + users);
        for (displayUser in $scope.users) {
            console.log(" display user-->  " + displayUser);
            if (displayUser.user == user) {
                console.log(" display user align   " + displayUser.align);
                return displayUser.align
            }
        }
        return align;
    };

    var setUser = function (displayUser) {
        return user = displayUser;
    };


    var load = function (userPlainObjectArr) {
        for (var i = 0; i < userPlainObjectArr.length; i++) {
            userArr.push(new User(userPlainObjectArr[i]))
        }
    }


    return {
        getAlign: getAlign,
        setUser: setUser,
        load: load
    };


});