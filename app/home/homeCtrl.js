bubleApp.controller("HomeCtrl", function ($scope, $uibModal, activeUser, $location) {
   
    $scope.login = function() {
        $uibModal.open({
            templateUrl: "app/login/login.html",
            controller: "LoginCtrl"
        })
    }
});