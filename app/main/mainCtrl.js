bubleApp.controller("MainCtrl", function ($scope, $http, activeUser, $location, bubles, users, pages) {
    // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    //$scope.a = "true";

    $scope.isImage = function (index) {
        return bubles.isImage(index);
    };

    $scope.alignBuble = function (index) {
        var align = "right";
        var username = "";
        for (i = 0; i < $scope.userArr.length; i++) {
            username = $scope.userArr[i].userName;
            if (bubles.get(index).user == username) {
                align = $scope.userArr[i].align
                //continue;
            }
        }
        if (align == "right") {
            return "pull-right";
        }
        else if (align == "left") {
            return "pull-left";
        }
        else {
            // center case
            return "";
        }

    };

    $scope.greetName = activeUser.get().firstName;



    $scope.index = 0;
    var pageIndex = 0;
    // Making sure that we are only loading once - BUBLEs
    if (bubles.getAll().length === 0) {
        $scope.bubleArr = [];
        $http.get(activeUser.get().data).then(function (response) {
            bubles.load(response.data);
            $scope.bubleArr = bubles.getAll();
        });
    } else {
        $scope.bubleArr = bubles.getAll();
    }

    // Making sure that we are only loading once -USERS
    if (users.getAll().length === 0) {
        $scope.userArr = [];
        $http.get("/app/data/users.json").then(function (response) {
            users.load(response.data);
            $scope.userArr = users.getAll();
            // pages.addBubleToPage(pageIndex, bubles);

            // if (true) {
            //     pages.addPage();
            //     pages.addBubleToPage({
            //         "date": "05-02-16",
            //         "time": " 16:41:41",
            //         "user": " Sweet Hila Croitoru",
            //         "content": " קיבלתי במדעים 100"
            //     });

            //    // console.log("after add buble to page buble: " + JSON.stringify(buble))
            //     console.log("after add buble to page buble PAGE: " + JSON.stringify(pages))



            //     console.log("pages length " + pages.length);
            //     console.log("pages " + + JSON.stringify(pages));


            //     pageArr[0].pageBubleList.push(bubleIndex);
            //     console.log("pageBubleList " + JSON.stringify(pageArr[index].pageBubleList));
            //     //  this.currentPageHeight += pageBubleList[i].sizebubleHeight + 1;
            //     //  console.log("adding buble" + buble + " size" + pageBubleList[i].sizebubleHeight)
            // }
            // else {
            //     pageArr.push(new Page());
            //     console.log("Crete new page:" + pageArr[length])
            //     index++;

            // }

        });
    } else {
        $scope.userArr = users.getAll();
        pages.addBubleToPage(pageIndex, bubles);
    }
    // $scope.bubleArr = bubles.getAll();
    // var w = bubles.get(0)
    // console.log("bubleArr[0] " + JSON.stringify(w));
    // var q = bubles.getUnique(0);
    // console.log("bubles " + + JSON.stringify(q));
    // console.log("$scope.bubleArrr[0] " + $scope.bubleArr[0]);



    $scope.openDetails = function (index) {
        $location.path("/bubles/" + index)
    }


    $scope.openBuble = function (index) {
        console.log("Open buble");
        console.log("Before" + JSON.stringify($scope.bubleArr[index]));

        var newMedia = prompt("Define buble type - image / text / date", bubles.get(index).media);
        if (bubles.get(index).media === "date") {
            var newContent = prompt("Please enter user", bubles.get(index).user);
            if (newContent != null) {
                bubles.updateUser(index, newContent);
                var newContent = prompt("Please enter time", bubles.get(index).time);
                if (newContent != null) {
                    bubles.updateTime(index, newContent);
                }
            }
        }


        if (newMedia === "text") {
            var newContent = prompt("Please enter your text", bubles.get(index).content);
            if (newContent != null) {
                bubles.updateContent(index, newContent);
                bubles.updateMedia(index, newMedia);
            }
        }
        else if (newMedia === "image") {
            var newContent = prompt("Please enter url", bubles.get(index).mediaUrl);
            if (newContent != null) {
                bubles.updateMediaUrl(index, newContent);
                bubles.updateMedia(index, "image");
            }

        }

        else if (newMedia === "date") {
            var newContent = prompt("Please enter Date", bubles.get(index).date);
            if (newContent != null) {
                bubles.updateDate(index, newContent);
                bubles.updateMedia(index, newMedia);
                bubles.updateContent(index, "");
            }

        }
        else {

        }
        console.log("After" + JSON.stringify($scope.bubleArr[index]));


    }

    $scope.deleteBuble = function (index) {
        console.log("Delete buble");
        console.log("Before" + JSON.stringify($scope.bubleArr[index]));
        bubles.remove(index);
        console.log("Before" + JSON.stringify($scope.bubleArr[index]));
    }

    $scope.Elogin = function () {
        //  var user = getLoggedInUser();
        if (user != null) {
            activeUser.login(user);
            $location.path("/main")
        } else {
            $scope.failedAttempt = true;
        }
    }

});
