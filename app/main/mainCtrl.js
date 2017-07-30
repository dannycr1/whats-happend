bubleApp.controller("MainCtrl", function ($scope, $http, activeUser, $location, bubles, displayUser) {
    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.isImage = function (index) {
        return bubles.isImage(index);
    };


    $scope.userAlign = function (buble) {
        console.log(" yyy   " + buble);

        console.log(" XXX   " + buble.user);


        if (displayUser.getAlign(buble.user) == "right") { return "pull-right" }
        if (displayUser.getAlign(buble.user) == "left") { return "pull-left" }
        return
    };





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

    // $scope.name1 = "שרית קרויטורו";
    // $scope.alignment = $scope.alignArr.filter(function (obj) {
    //     return obj.name == $scope.name1;
    // });
    // console.log($scope.alignment[0].align);

    // $scope.name1 = "Raya";
    // $scope.alignment = $scope.alignArr.filter(function (obj) {
    //     return obj.name == $scope.name1;
    // });
    // console.log($scope.alignment[0].align);




    $scope.align = function () {
        return displayUser.getAlign();
    }

    // console.log(displayUser + ": " + $scope.align);

    // $scope.isPullRight = false ;
    // $scope.isPullLeft = false ;
    // $scope.isPullCenter = true ;

    //$scope.userAlign = function(user){
    // {'pull-right': {{isPullRight}}, 'pull-left': {{isPullLeft}}, 'pull': {{isPullCenter}} }
    if ($scope.alignArr[1].align == "center") {
        $scope.isPullRight = false;
        $scope.isPullLeft = false;
        $scope.isPullCenter = true;
    }
    if ($scope.alignArr[1].align == "left") {
        $scope.isPullRight = false;
        $scope.isPullLeft = true;
        $scope.isPullCenter = false;
    }
    if ($scope.alignArr[1].align == "right") {
        $scope.isPullRight = true;
        $scope.isPullLeft = false;
        $scope.isPullCenter = false;
    }

    //};



    $scope.greetName = activeUser.get().firstName;






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
