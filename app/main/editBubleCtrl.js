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
    console.log("Cancel Edit Buble");
    $scope.closeModal("cancel");
  }
  $scope.addBuble = function () {
    console.log("Add buble");
    $scope.closeModal("Add");
  }

  $scope.updateBuble = function () {
    console.log("Update buble");
    var newBuble = buble;
    newBuble.content = $scope.buble.content;
    newBuble.user = $scope.buble.user;
    newBuble.media = $scope.buble.media;
    newBuble.mediaUrl = $scope.buble.mediaUrl;

  //}

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

    $scope.closeModal("update", newBuble);
  }

});




