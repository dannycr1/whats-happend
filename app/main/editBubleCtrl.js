bubleApp.controller('EditBubleCtrl', function ($scope, activeUser, $location, $filter, bubles, users, pages, $routeParams) {

  console.log('content in ctrl: ', $routeParams.pageIndex);
  console.log('content in ctrl: ', $routeParams.bubleIndex);

  var a = pages.getpageBubleList($routeParams.pageIndex);
  console.log('pages.pageBubleList[$routeParams.pageIndex]: ', a);
  $scope.buble = a[$routeParams.bubleIndex];
  console.log(' $scope.buble.content : ', $scope.buble.content);
  console.log(' $scope.buble.mediaUrl : ', $scope.buble.mediaUrl);


  $scope.deleteBuble = function () {
    console.log("Delete buble");

    bubles.remove($routeParams.bubleIndex);
 
   pages.removeAll();
    $location.path("/main")
  }

  $scope.cancelEditBuble = function () {
    // $scope.bubleArr = [];
    // $scope.pageArr = [];
    // $scope.userArr = []
    // bubles.removeAll();
    // pages.removeAll();
    $location.path("/main")
  }




});




