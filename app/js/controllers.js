// var shopControllers = angular.module('shopControllers', []);

// shopControllers

shopApp.controller('ShopListCtrl', ['$scope', '$http',
  function($scope, $http) {
  $http.get('items/items.json').success(function(data) {
    $scope.items = data;
  });
  $scope.orderProp = 'age';

  // ======= BASKET ========

  $scope.basket = [];
  $scope.total = 0;

  $scope.add = function(item) {
    console.log(item);
    
    if (item.stock > 0) {
      if($scope._isItemInBasket(item)){
        $scope._increaseItemInBasketQty(item);
      } else {
        item.chosenAmount = 1;
        $scope.basket.push(item);
      };
    };
    item.stock -= 1;
  };

  $scope.checkBasket = function() {
    console.log($scope.basket);
  };

  $scope.calculateTotal = function() {
    $scope.total = 0;
    for(var i = 0; i < $scope.basket.length; i++) { 
      $scope.total += ($scope.basket[i].price * $scope.basket[i].chosenAmount);
    };
    return $scope.total;
  };

  $scope.removeItem = function (item) {
    $scope.basket.pop(item);
  };

  // ====== VOUCHERS =======



  // ==== Private Methods ====

  $scope._isItemInBasket = function (item) {
    for(i=0; i<$scope.basket.length; i++){
      if($scope.basket[i] === item){
        return true;
      };
    };
    return false;
  };

  $scope._increaseItemInBasketQty = function (item) {
    var basketItem = $scope.basket.indexOf(item);
    $scope.basket[basketItem].chosenAmount += 1;
  };

  $scope._updateMessage = function (string) {
    $scope.message = string;
  }

}]);



