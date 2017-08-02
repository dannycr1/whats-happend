bubleApp.controller("MainCtrl", function ($scope, $http, activeUser, $location, bubles, users, pages) {
    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    $scope.a = "true";

    $scope.isImage = function (index) {
        return bubles.isImage(index);
    };

    $scope.counter = 0;
    $scope.alignBuble = function (index) {
        var username = ""
        for (i = 0; i < $scope.userArr.length; i++) {
            username = $scope.userArr[i].userName;
            if (bubles.get(index).user == username) {
                align = $scope.userArr[i].align
                continue;
            }
        }
        if (align == "right") {
            return "pull-right";
        }
        else if (align == "left") {
            return "pull-left";
        }
        else {
            // center case
            return "";
        }

    };

    $scope.greetName = activeUser.get().firstName;

    pages.load();

    // Making sure that we are only loading once
    if (bubles.getAll().length === 0) {
        $scope.bubleArr = [];
        $http.get(activeUser.get().data).then(function (response) {
            bubles.load(response.data);
            pages.addBuble2Page(bubles); loop
            $scope.bubleArr = bubles.getAll();
        });
    } else {
        $scope.bubleArr = bubles.getAll();
    }

    // Making sure that we are only loading once
    if (users.getAll().length === 0) {
        $scope.userArr = [];
        $http.get("/app/data/users.json").then(function (response) {
            users.load(response.data);
            $scope.userArr = users.getAll();
        });
    } else {
        $scope.userArr = users.getAll();
    }


    $scope.openDetails = function (index) {
        $location.path("/bubles/" + index)
    }


    $scope.openBuble = function (index) {
        console.log("edit buble");
        console.log(bubles.get(index).content);
        var newContent = prompt("Please enter your text", bubles.get(index).content);
        if (newContent != null) {
            bubles.updateContent(index, newContent);
        }
    }
});
