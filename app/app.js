var bubleApp = angular.module("BubleApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

bubleApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html",
            controller: "HomeCtrl"
        })
        .when("/main", {
            templateUrl: "app/main/main.html",
            controller: "MainCtrl"
        })
        .when("/editBuble", {
            templateUrl: "app/main/editBuble.html",
            controller: "EditBubleCtrl"
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
bubleApp.controller("TestCtrl", function ($scope, User, activeUser, Buble, bubles, users, Page, pages) {
    //     var plainUser = {
    //         "email": "nir@nir.com",
    //         "password": "nir123",
    //         "firstName": "Nir",
    //         "lastName": "Channes",
    //         "data": "nir-recipes.json",
    //         "align": "left",
    //         "userName": " אלון דוד"
    //     }

    // var buble = {
    //     "date": "05-02-16",
    //     "time": " 14:32:13",
    //     "user": " שרית cccccרו",
    //     "content": " כ👏"
    // };
    // console.log("show buble: " + JSON.stringify(buble));

    // console.log("show initial pages: " + JSON.stringify(pages));
    // console.log("Add Page");
    // var pageIndex = pages.addPage();
    // console.log("pageIndex]: " + JSON.stringify(pageIndex));

    // pages.addBubleToPage(pageIndex, buble);


    // pages.addBubleToPage(pageIndex, {
    //     "date": "05-02-16",
    //     "time": " 14:32:13",
    //     "user": " שרית קרויטורו",
    //     "content": " כל הכבוד!!🏆🏆🏆👏"
    // })

    // pages.addBubleToPage(pageIndex, buble);

    // pageIndex =pages.addPage();

    // pages.addBubleToPage(pageIndex, {
    //     "date": "05-02-16",
    //     "time": " 14:32:13",
    //     "user": " שרית קרויטורו",
    //     "content": " כל הכבוד!!🏆🏆🏆👏"
    // })

    // pages.addBubleToPage(pageIndex, {
    //     "date": "05-02-16",
    //     "time": " 14:32:13",
    //     "user": " שרית קרויטורו",
    //     "content": " כל הכבוד!!🏆🏆🏆👏"
    // })




    // pages.addBubleToPage(pageIndex, {
    //     "date": "05-02-16",
    //     "time": " 16:41:41",
    //     "user": " Sweet Hila Croitoru",
    //     "content": " קיבלתי במדעים 100"
    // });
    // console.log("after add buble to page buble: " + JSON.stringify(buble))
    // console.log("after add buble to page buble PAGE: " + JSON.stringify(pages))


    // buble.add = {
    //     "date": "05-02-16",
    //     "time": " 16:41:41",
    //     "user": " Sweet Hila Croitoru",
    //     "content": " קיבלתי במדעים 100"
    // };

    // console.log("buble: " + JSON.stringify(buble))
    // // -------------------------------------------------
    // console.log(JSON.stringify(bubles[bubles.length] - 1));


    // var page = new Page();
    // console.log(JSON.stringify(buble[0]));

    // console.log(JSON.stringify(bubles));
    // pages.addBubleToPage(buble);
    // pages.addBubleToPage(buble);
    // console.log(JSON.stringify(pages));
    // var page = new Page();
    // console.log(JSON.stringify(page));

    // console.log(activeUser.isLoggedIn());
    // activeUser.login(user);
    // console.log(JSON.stringify(activeUser.get()));
    // console.log(activeUser.isLoggedIn());
    // activeUser.logout();
    // console.log(activeUser.isLoggedIn());

    // var plainBuble = {
    //     "date": "05-02-16",
    //     "time": " 14:28:11",
    //     "user": " אלון דוד",
    //     "content": " 😀😀😀😀😀"
    // }
    // var buble = new Buble(plainBuble);

    // console.log(JSON.stringify(buble));


});