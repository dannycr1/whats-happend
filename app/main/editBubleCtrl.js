bubleApp.controller("EditBubleCtrl", function ($scope, $http, $location, activeUser, User) {


    // $scope.isEdit = function () {
    //     return 
    // };


    $scope.open = function (instanceNumber) {

        var modalInstance;

        modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'editBuble.html',
            controller: 'EditBubleCtrl',
            size: 'sm',
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        })
    }

});
