bubleApp.controller('EditBubleCtrl', function ($scope, activeUser, $location, $filter, bubles, users, pages, $routeParams, Buble) {

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
    pages.removeAll();
    $location.path("/main")
  }

  $scope.addBuble = function () {
    console.log("Add buble");
    var b = pages.get([$routeParams.pageIndex]).pageBubleList[$routeParams.bubleIndex];
    var index = bubles.getIndex(b);


    var b = {
      "date": b.date,
      "time": b.time,
      "user": b.user,
      "content": b.content,
      "media": b.media,
      "mediaUrl": b.mediaUrl,
      "styleSet": b.styleSet
    };
    var dupBuble = new Buble(b);
    bubles.add(index, dupBuble);
    bubles.getAll();
    pages.removeAll();
    $location.path("/main")
  }

  $scope.updateBuble = function () {
    console.log("Update buble");
    var b = {};
    b = bubles.get($routeParams.bubleIndex);
    // if ($scope.buble.date != null) {
    //   b.date = $filter("date")($scope.buble.date, 'yyyy-MM-dd');
    // }
    // if ($scope.buble.time != null) {
    //   b.time = $filter("time")($scope.buble.time, 'hh-mm-ss');
    // }
    if ($scope.buble.media == "date") {
      b.user = "DATE";
      b.content = "";
      b.time = "";
      b.styleSet = "0";
      b.mediaUrl = "";
    }
    b.content = $scope.buble.content;
    if ($scope.buble.mediaUrl != null) {
      b.mediaUrl = $scope.buble.mediaUrl;
    }
    bubles.update($routeParams.bubleIndex, b);
    bubles.getAll();
    pages.removeAll();
    $location.path("/main")
  }
});




