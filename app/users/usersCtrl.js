bubleApp.controller('UserCtrl', function ($scope, activeUser, $location, $filter, bubles, users, pages, $routeParams) {

    $scope.userArr = users.getAll();
    $scope.bubleArr = bubles.getAll();
    //$scope.styleSet = users.getStyleSet(user)

    $scope.setUserStyle = function (index) {
        console.log("Set user style");
        users.updateStyleSet(index, user.styleSet);
    }

    $scope.setUserAlign = function (index) {
        console.log("Set user align");
        users.setUserAlign(index, user.align);
    }

    $scope.cancelEditUser = function () {
        //pages.removeAll();
        bubles.getAll();
        pages.removeAll();
        $location.path("/main")
    }

    $scope.apply = function () {
        //pages.removeAll();
        bubles.getAll();
        pages.removeAll();
        $location.path("/main")
    }

});




