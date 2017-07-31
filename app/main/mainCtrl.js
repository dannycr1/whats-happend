bubleApp.controller("MainCtrl", function ($scope, $http, activeUser, $location, bubles, users) {
    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    $scope.a = "true";

    $scope.isImage = function (index) {
        return bubles.isImage(index);
    };

    $scope.isRightAlign = function (index) {
        var align = "right"
        var username = ""
        for (i = 0; i < $scope.userArr.length; i++) {
            username = $scope.userArr[i].userName;
            if (bubles.get(index).user == username) {
                align = $scope.userArr[i].align
                continue;
            }
        }
        if (align == "right") {
            return true;
        }
        else {
            return false;
        }

    };

    $scope.greetName = activeUser.get().firstName;


    // Making sure that we are only loading once
    if (bubles.getAll().length === 0) {
        $scope.bubleArr = [];
        $http.get(activeUser.get().data).then(function (response) {
            bubles.load(response.data);
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
