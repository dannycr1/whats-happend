// Shared User Constructor
bubleApp.factory("User", function(){
    function User(plainObject) {
        this.email = plainObject.email;
        this.password = plainObject.password;
        this.firstName = plainObject.firstName;
        this.lastName = plainObject.lastName;
        this.data = plainObject.data;
        this.align = plainObject.align;
    };

    return User;
});

// Service that manges the active user
bubleApp.factory("activeUser", function(User){
    var user = null;

    var isLoggedIn = function() {
        return user ? true : false;
    };

    var login = function(loggedInUser) {
        user = loggedInUser;
    };

    var logout = function() {
        user = null;
    };

    var get = function() {
        return user;
    };

    return {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        get: get
    };   
});