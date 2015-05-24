var shopControllers = angular.module('shopControllers', []);

shopControllers.controller('ShopListCtrl', ['$scope', '$http',
  function($scope, $http) {
  $http.get('items/items.json').success(function(data) {
    $scope.items = data;
  });
  $scope.orderProp = 'age';

  // ===== BASKET ======

  $scope.basket = [];

  $scope.add = function(item) {
    item.qty = 1;
    $scope.basket.push(item);
  };

}]);



