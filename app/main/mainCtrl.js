bubleApp.controller("MainCtrl", function ($scope, $http, activeUser, $location, bubles) {
    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.greetName = activeUser.get().firstName;


    $scope.alignArr = [{
        name: "אלון דוד",
        align: "left"
    }, {
        name: "Raya",
        align: "right"
    }, {
        name: "שרית קרויטורו",
        align: "center"
    }]

    console.log($scope.alignArr[1].align);
    $scope.name1= "שרית קרויטורו";
    $scope.alignment = $scope.alignArr.filter(function( obj) {
  return obj.name == $scope.name1;
});
 console.log($scope.alignment[0].align);

 $scope.name1= "Raya";
  $scope.alignment = $scope.alignArr.filter(function( obj) {
  return obj.name == $scope.name1;
});
console.log($scope.alignment[0].align);

    // Making sure that we are only loading once
    if (bubles.getAll().length === 0) {
        $scope.bubleArr = [];
        $http.get(activeUser.get().data).then(function (response) {
            bubles.load(response.data);
            $scope.bubleArr = bubles.getAll();
        });
    } else {
        $scope.bubleArr = bubles.getAll();
    }

    $scope.openDetails = function (index) {
        $location.path("/bubles/" + index)
    }
});
