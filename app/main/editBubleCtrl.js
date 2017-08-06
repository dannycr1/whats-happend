//bubleApp.controller("EditBubleCtrl", ['$scope', '$http', '$location', 'items', 'content'], function ($scope, $loacation, activeUser, User, items, content) {


// $scope.isEdit = function () {
//     return 
// };


bubleApp.controller('EditBubleCtrl', ['$scope'], function ($scope, content, $modalInstance, items, bubles) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };
  $scope.content = content;
  console.log('content in ctrl: ', content);

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

angular.module('ui.bootstrap.demo').directive("masonry", function () {
   var NGREPEAT_SOURCE_RE = '<!-- ngRepeat: ((.*) in ((.*?)( track by (.*))?)) -->';
    return {
        compile: function(element, attrs) {
            // auto add animation to brick element
            var animation = attrs.ngAnimate || "'masonry'";
            var $brick = element.children();
            $brick.attr("ng-animate", animation);
            
            // generate item selector (exclude leaving items)
            var type = $brick.prop('tagName');
            var itemSelector = type+":not([class$='-leave-active'])";
            
            return function (scope, element, attrs) {
                var options = angular.extend({
                    itemSelector: itemSelector
                }, scope.$eval(attrs.masonry));
                
                // try to infer model from ngRepeat
                if (!options.model) { 
                    var ngRepeatMatch = element.html().match(NGREPEAT_SOURCE_RE);
                    if (ngRepeatMatch) {
                        options.model = ngRepeatMatch[4];
                    }
                }
                
                // initial animation
                element.addClass('masonry');
                
                // Wait inside directives to render
                setTimeout(function () {
                    element.masonry(options);
                    
                    element.on("$destroy", function () {
                        element.masonry('destroy')
                    });
                    
                    if (options.model) {
                        scope.$apply(function() {
                            scope.$watchCollection(options.model, function (_new, _old) {
                                if(_new == _old) return;
                                
                                // Wait inside directives to render
                                setTimeout(function () {
                                    element.masonry("reload");
                                });
                            });
                        });
                    }
                });
            };
        }
    };
});

//     $scope.open = function () {

//         var modalInstance;

//         modalInstance = $uibModal.open({
//             animation: true,
//             templateUrl: '/app/main/editBuble.html',
//             controller: '/app/main/EditBubleCtrl',
//             size: 'sm',
//             scope: $scope,
//             resolve: {
//                 items: function () {
//                     return $scope.items;
//                 },
//                 content: function () { return content }

//             }
//         })
//     }

//     console.log("Before" + JSON.stringify("$scope.items " + $scope.items));

// });




