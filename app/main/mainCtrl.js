bubleApp.controller("MainCtrl", function ($scope, $http, activeUser, $location, $filter, bubles, users, pages, $uibModal , Buble) {
    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    //$scope.a = "true";
    console.log($scope);

    $scope.editBuble = function (buble, displayPage, indexBuble) {
        var modalInstance = $uibModal.open({
            templateUrl: "app/main/editBuble.html",
            controller: "EditBubleCtrl",
            scope: $scope,
            resolve: {
                buble: function () {
                    return buble;
                },
                displayPage: function () {
                    return displayPage;
                },
                indexBuble: function () {
                    return indexBuble;
                }
            }
        });

        modalInstance.result.then(function (result, newBuble) {
            console.log(result + "  " + buble);
            //$scope.newBuble = new Buble(buble);

            $scope.bubleIndex = bubles.getIndex(buble);

            if (result == "delete") { bubles.remove($scope.bubleIndex); pages.removeAll(); $scope.bublePages = pages.buildPages(); }
            if (result == "Add") {     
                var b = buble;
                var newBuble = new Buble(buble);
           
                // var newBuble = {
                //     "date": b.date,
                //     "time": b.time,
                //     "user": b.user,
                //     "content": b.content,
                //     "media": b.media,
                //     "mediaUrl": b.mediaUrl,
                //     "styleSet": b.styleSet
                // };
                // var dupBuble = new Buble(b);
                bubles.add($scope.bubleIndex, newBuble);
                bubles.getAll();
                pages.removeAll();
                $scope.bublePages = pages.buildPages();

            }
            if (result == "cancel") { pages.removeAll(); $scope.bublePages = pages.buildPages(); }
            if (result == "Update") {
                var newBuble = bubles.get($scope.bubleIndex);
                if ($scope.buble.media == "date") {
                    newBuble.user = "DATE";
                    newBuble.content = "";
                    newBuble.time = "";
                    newBuble.styleSet = "0";
                    newBuble.mediaUrl = "";
                }
                b.content = $scope.buble.content;
                if ($scope.buble.mediaUrl != null) {
                    newBuble.mediaUrl = $scope.buble.mediaUrl;
                }
                bubles.update($scope.bubleIndex, newBuble);
                // bubles.getAll();
                // pages.removeAll();

            }




            // $scope.bublePages = pages.buildPages();
        });
        // $scope.schedule = angular.fromJson(scheduleJSON);

    }

    $scope.isImage = function (index) {
        return bubles.isImage(index);
    };

    $scope.displayBuble = function (index) {
        var align = "right";
        var username = "";
        for (i = 0; i < $scope.userArr.length; i++) {
            username = $scope.userArr[i].userName;
            if (pages.get($scope.displayPage).pageBubleList[index].user == username) {
                var align = $scope.userArr[i].align;
                var styleSet = $scope.userArr[i].styleSet;

                //continue;
            }
        }
        if (align == "right") {
            return ("pull-right " + "style" + styleSet);
        }
        else if (align == "left") {
            return ("pull-left " + "style" + styleSet);
        }
        else {
            // center case
            return ("style" + styleSet);
        }

    };

    $scope.displayPage = 0;
    $scope.displayPageIndex = function (number) {
        if (($scope.displayPage + number) < 0) { number = 0; }
        return $scope.displayPage = $scope.displayPage + number;
    };

    function loadNewBubles() {
        $http.get(activeUser.get().data).then(function (response) {
            bubles.load(response.data);
            $scope.bubleArr = bubles.getAll();
            $scope.bublePages = pages.buildPages();
            $scope.displayPage = 0;
        });
    }

    // Making sure that we are only loading once - BUBLEs
    var len = bubles.getAll().length
    if (len === 0) {
        $scope.index = 0;
        var pageIndex = 0;
        $scope.bubleArr = [];
        $scope.bublePages = [];

        loadNewBubles();

    }
    else {
        loadBubles();

    }

    function loadBubles() {
        $scope.bubleArr = bubles.getAll();
        $scope.bublePages = pages.buildPages();
        console.log($scope.bubleArr);
        console.log($scope.pageArr);
    }




    // Making sure that we are only loading once -USERS
    if (users.getAll().length === 0) {
        $scope.userArr = [];
        $http.get("/app/data/users.json").then(function (response) {
            users.load(response.data);
            $scope.userArr = users.getAll();
        });
    } else {
        $scope.userArr = users.getAll();
        // pages.addBubleToPage(pageIndex, bubles);
    }


    // $scope.openDetails = function (pageIndex, index) {

    //     console.log("Edit buble");
    //     console.log("Before" + JSON.stringify($scope.bubleArr[index]));
    //     $location.path("/editBuble/" + pageIndex + "/" + index)
    // }

    $scope.fromDate = "2016-05-01";
    $scope.toDate = "2016-10-20";


});


bubleApp.filter('dateRange', function () {
    return function (items, fromDate, toDate) {
        var filtered = [];
        //here you will have your desired input
        //console.log(items, fromDate, toDate);

        var from_date = Date.parse(fromDate) - 1000;
        var to_date = Date.parse(toDate) + 1000;
        angular.forEach(items, function (item) {
            if (item.exactDate > from_date && item.exactDate < to_date) {
                filtered.push(item);
            }
        });
        return filtered;
    };

});
