var bubleApp = angular.module("BubleApp", ["ngRoute", "ngAnimate", "ui.bootstrap", 'ngPrint']);

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
        .when("/editBuble/:pageIndex/:bubleIndex", {
            templateUrl: "app/main/editBuble.html",
            controller: "EditBubleCtrl"
        })
        .when("/user", {
            templateUrl: "app/users/users.html",
            controller: "UserCtrl"
        })
        .when("/page", {
            templateUrl: "app/Page/pageStyle.html",
            controller: "PageStyleCtrl"         
        })

});

// // TODO: Delete this TEST !!!!!!!!!
// bubleApp.controller("TestCtrl", function ($scope, User, activeUser, Buble, bubles, users, Page, pages) {
//     //     var plainUser = {
//     //         "email": "nir@nir.com",
//     //         "password": "nir123",
//     //         "firstName": "Nir",
//     //         "lastName": "Channes",
//     //         "data": "nir-recipes.json",
//     //         "align": "left",
//     //         "userName": " אלון דוד"
//     //     }

//     // var buble = {
//     //     "date": "05-02-16",
//     //     "time": " 14:32:13",
//     //     "user": " שרית cccccרו",
//     //     "content": " כ👏"
//     // };
//     // console.log("show buble: " + JSON.stringify(buble));

//     // console.log("show initial pages: " + JSON.stringify(pages));
//     // console.log("Add Page");
//     // var pageIndex = pages.addPage();
//     // console.log("pageIndex]: " + JSON.stringify(pageIndex));

//     // pages.addBubleToPage(pageIndex, buble);

// });