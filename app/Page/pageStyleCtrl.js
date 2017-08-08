bubleApp.controller('PageStyleCtrl', function ($scope, activeUser, $location, $filter, bubles, users, pages, $routeParams) {

    $scope.pageArr = pages.getAll();
    //$scope.styleSet = users.getStyleSet(user)

    $scope.setPageStyle = function (index) {
        console.log("Set page style");
        pages.updateStyleSet(index, user.styleSet);
    }


    $scope.cancelEditPage = function () {
        bubles.getAll();
        pages.removeAll();
        $location.path("/main")
    }

    $scope.apply = function () {
        //pages.removeAll();
        $location.path("/main")
    }

});




