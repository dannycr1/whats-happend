var bubleApp = angular.module("BubleApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

bubleApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html",
            controller: "HomeCtrl"
        })
     .when("/main", {
         templateUrl: "app/main.html",
         controller: "RecipeGalleryCtrl"
     })
    // .when("/recipes/:recipeIndex", {
    //     templateUrl: "app/recipe/recipeDetails.html",
    //     controller: "RecipeDetailsCtrl"
    // }).when("/new", {
    //     templateUrl: "app/recipe/newRecipe.html",
    //     controller: "NewRecipeCtrl"            
    // })

});

// TODO: Delete this TEST !!!!!!!!!
bubleApp.controller("TestCtrl", function ($scope, User, activeUser, Buble, bubles) {
        var plainUser = {
        "email": "nir@nir.com",
        "password": "nir123",
        "firstName": "Nir",
        "lastName": "Channes",
        "data": "nir-recipes.json"
    }

    var user = new User(plainUser);

    console.log(JSON.stringify(user));
    console.log(activeUser.isLoggedIn());
    activeUser.login(user);
    console.log(JSON.stringify(activeUser.get()));
    console.log(activeUser.isLoggedIn());
    activeUser.logout();
    console.log(activeUser.isLoggedIn());
    
    var plainBuble = {
        "date": "05-02-16",
        "time": " 14:28:11",
        "user": " אלון דוד",
        "content": " 😀😀😀😀😀"
    }
    var buble = new Buble(plainBuble);

    console.log(JSON.stringify(buble));


});