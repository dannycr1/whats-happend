bubleApp.controller("MainCtrl", function ($scope, $http, activeUser, $location, $filter, bubles, users, pages) {
    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    //$scope.a = "true";

    $scope.isImage = function (index) {
        return bubles.isImage(index);
    };

    $scope.displayBuble = function (index) {
        var align = "right";
        var username = "";
        for (i = 0; i < $scope.userArr.length; i++) {
            username = $scope.userArr[i].userName;
            if (pages.get($scope.displayPage).pageBubleList[index].user == username) {
                var align = $scope.userArr[i].align;
                var styleSet = $scope.userArr[i].styleSet;

                //continue;
            }
        }
        if (align == "right") {
            return ("pull-right " + "style" + styleSet);
        }
        else if (align == "left") {
            return ("pull-left " + "style" + styleSet);
        }
        else {
            // center case
            return ("style" + styleSet);
        }

    };

    $scope.displayPage = 0;
    $scope.displayPageIndex = function (number) {
        if (($scope.displayPage + number) < 0) { number = 0; }
        return $scope.displayPage = $scope.displayPage + number;
    };



    // Making sure that we are only loading once - BUBLEs
    var len = bubles.getAll().length
    if (len === 0) {
        $scope.index = 0;
        var pageIndex = 0;
        $scope.bubleArr = [];
        $scope.bublePages = [];

        $http.get(activeUser.get().data).then(function (response) {
            bubles.load(response.data);
            $scope.bubleArr = bubles.getAll();
            $scope.bublePages = pages.buildPages();
            $scope.displayPage = 0;
        });

    }
    else {
        $scope.bubleArr = bubles.getAll();
        $scope.bublePages = pages.buildPages();
        console.log($scope.bubleArr);
        console.log($scope.pageArr);

    }




    // Making sure that we are only loading once -USERS
    if (users.getAll().length === 0) {
        $scope.userArr = [];
        $http.get("/app/data/users.json").then(function (response) {
            users.load(response.data);
            $scope.userArr = users.getAll();
        });
    } else {
        $scope.userArr = users.getAll();
        // pages.addBubleToPage(pageIndex, bubles);
    }


    $scope.openDetails = function (pageIndex, index) {

        console.log("Edit buble");
        console.log("Before" + JSON.stringify($scope.bubleArr[index]));
        $location.path("/editBuble/" + pageIndex + "/" + index)
    }
   

    


    // $scope.Elogin = function () {
    //     //  var user = getLoggedInUser();
    //     if (user != null) {
    //         activeUser.login(user);
    //         $location.path("/main")
    //     } else {
    //         $scope.failedAttempt = true;
    //     }
    // }

    $scope.fromDate = "2016-05-01";
    $scope.toDate = "2016-10-20";


});


bubleApp.filter('dateRange', function () {
    return function (items, fromDate, toDate) {
        var filtered = [];
        //here you will have your desired input
        //console.log(items, fromDate, toDate);

        var from_date = Date.parse(fromDate) - 1000;
        var to_date = Date.parse(toDate) + 1000;
        angular.forEach(items, function (item) {
            if (item.exactDate > from_date && item.exactDate < to_date) {
                filtered.push(item);
            }
        });
        return filtered;
    };

});
