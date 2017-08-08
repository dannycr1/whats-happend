bubleApp.controller('EditBubleCtrl', function ($scope, activeUser, $uibModalInstance, $location, $filter, bubles, users, pages, $routeParams, Buble, displayPage, indexBuble, buble) {
  /*
    console.log('displayPage in ctrl: ', displayPage);
    console.log('indexBuble in ctrl: ', indexBuble);
  
  
    console.log('content in ctrl: ', $routeParams.pageIndex);
    console.log('content in ctrl: ', $routeParams.bubleIndex);
  
    var a = pages.getpageBubleList($routeParams.pageIndex);
    console.log('pages.pageBubleList[$routeParams.pageIndex]: ', a);
    $scope.buble = a[$routeParams.bubleIndex];
    console.log(' $scope.buble.content : ', $scope.buble.content);
    console.log(' $scope.buble.mediaUrl : ', $scope.buble.mediaUrl);
  */

 // $scope.bubleInd = bubles.getIndex($scope.buble);
  $scope.buble = new Buble(buble);
  $scope.bubleIndex = bubles.getIndex(buble)

  $scope.closeModal = function (param) {
    $uibModalInstance.close(param);
  }

  $scope.deleteBuble = function () {
    console.log("Delete buble");
    $scope.closeModal("delete");
  }

  $scope.cancelEditBuble = function () {
    //pages.removeAll();
    $scope.closeModal("cancel");
  }

  $scope.addBuble = function () {
    console.log("Add buble");
    // var b = $scope.buble;
    // var b = {
    //   "date": b.date,
    //   "time": b.time,
    //   "user": b.user,
    //   "content": b.content,
    //   "media": b.media,
    //   "mediaUrl": b.mediaUrl,
    //   "styleSet": b.styleSet
    // };
    // var dupBuble = new Buble(b);
    // bubles.add($scope.bubleIndex, dupBuble);
    // bubles.getAll();
    // pages.removeAll();
    $scope.closeModal("Add");
  }

  $scope.updateBuble = function () {
    console.log("Update buble");
    // var b = bubles.get($scope.bubleIndex);
    // // if ($scope.buble.date != null) {
    // //   b.date = $filter("date")($scope.buble.date, 'yyyy-MM-dd');
    // // }
    // // if ($scope.buble.time != null) {
    // //   b.time = $filter("time")($scope.buble.time, 'hh-mm-ss');
    // // }
    // if ($scope.buble.media == "date") {
    //   b.user = "DATE";
    //   b.content = "";
    //   b.time = "";
    //   b.styleSet = "0";
    //   b.mediaUrl = "";
    // }
    // b.content = $scope.buble.content;
    // if ($scope.buble.mediaUrl != null) {
    //   b.mediaUrl = $scope.buble.mediaUrl;
    // }
    // bubles.update($scope.bubleIndex, b);
    // //bubles.getAll();
    // //pages.removeAll();
    $scope.closeModal("update");
  }

});




