var shopControllers = angular.module('shopControllers', []);

shopControllers.controller('ShopListCtrl', ['$scope', '$http',
  function($scope, $http) {
  $http.get('items/items.json').success(function(data) {
    $scope.items = data;
  });
  $scope.orderProp = 'age';

  // ======= BASKET ========

  $scope.basket = [];
  $scope.message = "Nothing here";

  $scope.add = function(item) {
    // var chosenItem = $scope.items[item];
    // var basketItem = {name: chosenItem.name, chosenAmount: chosenItem.stock, cost: chosenItem.price};
    console.log(item);
    
    if (item.stock > 0) {
      if($scope._isItemInBasket(item)){
        item.chosenAmount += 1;
        item.stock -= 1;
      } else {
        item.stock -= 1;
        $scope.basket.push(item[0]);
        $scope._updateMessage("Item added to your cart");
      };
    } else {
      $scope._updateMessage("Sorry, Item out of Stock.");
    };
    // console.log(item);
    // if($scope._isItemInBasket) {
    //   $scope._increaseItemInBasketQty(item);
    // } else {
    //   $scope.basket.push(item);
    //   $scope.basket[item].chosenAmount = 1;
    // };
    // item.stock -= 1;
    // console.log(item);
  };

  $scope.checkBasket = function() {
    console.log($scope.basket);
  };

  // $scope.calculateTotal = function() {

  // };

  // $scope.removeItem = function (index) {
    
  // };

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
    $scope.basket[item].chosenAmount += 1;
  };

  $scope._updateMessage = function (string) {
    $scope.message = string;
  }

}]);



