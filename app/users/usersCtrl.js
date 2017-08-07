bubleApp.controller('UserCtrl', function ($scope, activeUser, $location, $filter, bubles, users, pages, $routeParams) {

    $scope.userArr = users.getAll();
    $scope.bubleArr = bubles.getAll();
    //$scope.styleSet = users.getStyleSet(user)

    $scope.setUserStyle = function (index) {
        console.log("Set user style");

        // var username = "";
        // for (i = 0; i < $scope.userArr.length; i++) {
        //     username = $scope.userArr[i].userName;
        //     if (bubles.get(index).user == username) {

        //         var align = $scope.userArr[i].align
        //         var styleSet = $scope.userArr[i].styleSet
        //         var newIndex = i;
        //     }
        // }

        //console.log("Before " + JSON.stringify($scope.userArr[Index]));

        //  var styleSet = $scope.userArr[newIndex].styleSet;
        //     }
        // }
        // var newContent = prompt("Please enter styleSet 1-8", styleSet);
        // if ((newContent >= 1) && (newContent <= 8)) {
        users.updateStyleSet(index, user.styleSet);
        //   }
        // else {
        //     newContent = styleSet;
        // }

        console.log("After" + JSON.stringify($scope.userArr[newIndex]));

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




