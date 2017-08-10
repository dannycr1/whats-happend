bubleApp.controller('EditBubleCtrl', function ($scope, activeUser, $uibModalInstance, $location, $filter, bubles, users, pages, $routeParams, Buble, displayPage, indexBuble, buble) {
      // If the user is not logged in going back to home screen
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
  
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
    newBuble.hide = $scope.buble.hide;

    $scope.closeModal("update", newBuble);
  }

});




