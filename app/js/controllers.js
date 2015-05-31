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
  $scope.voucherMessage = null;
  $scope.discountedTotal = null;
  $scope.voucherValue = 0;

  $scope.add = function(item) {    
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

  $scope.vouchers = [
    {
      "name": "FIVEOFF",
      "value": 5,
      "requiredAmount": 0,
      "description": "£5.00 off your order."
    },
    {
      "name": "TENOFF",
      "value": 10,
      "requiredAmount": 50,
      "description": "£10.00 off when you spend over £50.00."
    },
    {
      "name": "SHOES",
      "value": 15,
      "requiredAmount": 75,
      "description": "£15.00 off when you have bought at least one footwear item and spent over £75.00.",
      "conditions": ["Women's Footwear", "Men's Footwear"]
    }
  ];

  $scope.applyVoucher = function (voucher) {
    var validVoucher = $scope._checkVoucher(voucher);
    // console.log(validVoucher+"apply voucher stage");
    if(validVoucher) {
      $scope.discountedTotal = $scope.calculateTotal() - validVoucher.value;
      $scope.voucherValue = validVoucher.value;
    } else if(voucher != undefined) {
      $scope.discountedTotal = $scope.total;
    };
  };

  // $scope.consoleCheckVoucher = function () {
  //   console.log();
  // };

  // ==== Private Methods ====

  $scope._isItemInBasket = function (item) {
    for(var i=0; i<$scope.basket.length; i++){
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
  };

  $scope._checkVoucher = function(voucher) {
    for(var i=0; i<$scope.vouchers.length; i++) {
      var validVouchers = $scope.vouchers[i];
      var checkName = $scope._checkName(validVouchers, voucher);
      var checkValue = $scope._checkValue(validVouchers, voucher);
      var checkConditions = $scope._checkConditions(validVouchers);
      if(checkName && checkValue && checkConditions) {
        return validVouchers;
      };
    };
  };

  $scope._checkName = function (voucher, voucherBeingUsed) {
    if(voucher.name === voucherBeingUsed) {
      return true;
    }
  };

  $scope._checkValue = function (voucher) {
    if($scope.calculateTotal() > voucher.requiredAmount) {
      return true;
    }
  };

  $scope._checkConditions = function (voucher) {
    if(voucher.conditions != undefined) {
      for(var i=0; i<$scope.basket.length; i++) {
        if(voucher.conditions.indexOf($scope.basket[i].category) === voucher.conditions[0] || voucher.conditions[1]) {
          return true;
        }
      }
    } else {
      return true;
    };
  };
  
}]);



