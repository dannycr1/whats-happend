var bubleApp = angular.module("BubleApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

//bubleApp.config(function ($routeProvider) {
    // $routeProvider
    //     .when("/", {
    //         templateUrl: "app/home/home.html",
    //         controller: "HomeCtrl"
    //     })
    // .when("/recipes", {
    //     templateUrl: "app/recipe/recipeGallery.html",
    //     controller: "RecipeGalleryCtrl"
    // })
    // .when("/recipes/:recipeIndex", {
    //     templateUrl: "app/recipe/recipeDetails.html",
    //     controller: "RecipeDetailsCtrl"
    // }).when("/new", {
    //     templateUrl: "app/recipe/newRecipe.html",
    //     controller: "NewRecipeCtrl"            
    // })

//});

// TODO: Delete this TEST !!!!!!!!!
bubleApp.controller("TestCtrl", function ($scope, Buble) {
    var plainBuble = {
        "date": "05-02-16",
        "time": " 14:28:11",
        "user": " אלון דוד",
        "content": " 😀😀😀😀😀"
    }
    var buble = new Buble (plainBuble);

    console.log(JSON.stringify(buble)) ;
});