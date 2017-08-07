bubleApp.controller('UserCtrl', function ($scope, activeUser, $location, $filter, bubles, users, pages, $routeParams) {

    console.log('content in ctrl: ', $routeParams.pageIndex);
    console.log('content in ctrl: ', $routeParams.bubleIndex);

    var a = pages.getpageBubleList($routeParams.pageIndex);
    console.log('pages.pageBubleList[$routeParams.pageIndex]: ', a);
    $scope.buble = a[$routeParams.bubleIndex];
    console.log(' $scope.buble.content : ', $scope.buble.content);
    console.log(' $scope.buble.mediaUrl : ', $scope.buble.mediaUrl);


    $scope.setUserStyle = function (index) {
        console.log("Set user style");

        var username = "";
        for (i = 0; i < $scope.userArr.length; i++) {
            username = $scope.userArr[i].userName;
            if (bubles.get(index).user == username) {

                var align = $scope.userArr[i].align
                var styleSet = $scope.userArr[i].styleSet
                var newIndex = i;
            }
        }

        console.log("Before " + JSON.stringify($scope.userArr[newIndex]));

        var styleSet = $scope.userArr[newIndex].styleSet;
        //     }
        // }
        var newContent = prompt("Please enter styleSet 1-8", styleSet);
        if ((newContent >= 1) && (newContent <= 8)) {
            users.updateStyleSet(newIndex, newContent);
        }
        else {
            newContent = styleSet;
        }

        console.log("After" + JSON.stringify($scope.userArr[newIndex]));

    }
});




