bubleApp.controller('PageStyleCtrl', function ($scope, activeUser, $location, $filter, bubles, users, pages, $routeParams) {

    $scope.pageArr = pages.getAll();
    //$scope.styleSet = users.getStyleSet(user)

    $scope.setPageStyle = function () {
        console.log("Set page style");
        $scope.pageStyle="pageStyle3"
    }


    $scope.cancelEditPage = function () {
        $location.path("/main")
    }

    $scope.apply = function () {
        //pages.removeAll();
        $location.path("/main")
    }

});




