bubleApp.controller("MainCtrl", function ($scope, $http, activeUser, $location, bubles, displayUser, User) {
    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    $scope.counter = 0;

    $scope.isImage = function (index) {
        return bubles.isImage(index);
    };


    $scope.userAlign = function (buble) {
        //console.log(" yyy   " + buble);
        //console.log(" XXX   " + buble.user);
        var a = $scope.counter % 3;

        if ($scope.counter <= 600) { $scope.counter++ };

        if (a == "0") {
            console.log("pull-right");
            return "pull-right"
        };
        if (a == "1") {
            console.log("pull-left");
            return "pull-left"
        };
        console.log("pull-center");

        return "";
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

    $scope.openDetails = function (index) {
        $location.path("/bubles/" + index)
    }
});
