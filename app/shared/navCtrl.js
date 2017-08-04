bubleApp.controller("NavCtrl", function ($scope, $filter, activeUser) {

    //$scope.isLoggedIn = activeUser.isLoggedIn();
    $scope.fromDate = $filter("date")('2016-05-01', 'yyyy-MM-dd');
    $scope.toDate = $filter("date")(Date.now(), 'yyyy-MM-dd');

    $scope.isLoggedIn = function () {
        return activeUser.isLoggedIn();
    };

    $scope.logout = function () {
        activeUser.logout();
        //$location.path("/")

    }
});