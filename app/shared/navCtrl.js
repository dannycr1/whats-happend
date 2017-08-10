bubleApp.controller("NavCtrl", function ($scope, $filter, activeUser, bubles, pages) {

    //$scope.isLoggedIn = activeUser.isLoggedIn();
    $scope.fromDate = $filter("date")('2016-05-01', 'yyyy-MM-dd');
    $scope.toDate = $filter("date")(Date.now(), 'yyyy-MM-dd');

    $scope.isLoggedIn = function () {
        return activeUser.isLoggedIn();
    };


    $scope.logout = function () {
        activeUser.logout();
        bubles.removeAll();
        pages.removeAll();
        $location.path("/");
    }

    $scope.setDate = function (fromDate, toDate) {
        return RngDate = {
            "fromDate": fromDate,
            "toDate": toDate
        };

    }
});