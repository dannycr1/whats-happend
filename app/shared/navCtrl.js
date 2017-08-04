bubleApp.controller("NavCtrl", function ($scope, $filter, activeUser) {

    //$scope.isLoggedIn = activeUser.isLoggedIn();
    $scope.startdate = $filter("date")('2010-01-01', 'yyyy-MM-dd');
    $scope.enddate = $filter("date")(Date.now(), 'yyyy-MM-dd');

    $scope.isLoggedIn = function () {
        return activeUser.isLoggedIn();
    };

    $scope.logout = function () {
        activeUser.logout();
        //$location.path("/")

    }
});