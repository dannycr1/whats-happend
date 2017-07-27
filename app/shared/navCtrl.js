bubleApp.controller("NavCtrl", function ($scope, activeUser) {
    
    //$scope.isLoggedIn = activeUser.isLoggedIn();
    
    $scope.isLoggedIn = function() {
        return activeUser.isLoggedIn();
    };
});