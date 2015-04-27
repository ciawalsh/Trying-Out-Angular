var shopApp = angular.module('shopApp', []);

shopApp.controller('ShopListCtrl', function($scope) {
  $scope.items = [
    {'name': 'Almond Toe Court Shoes',
     'colour': 'Patent Black',
     'price': '99.00',
     'stock': '5',
     'category': 'Woman\'s Footwear',
     'image': 'images/Almond-Toe-Patent.jpeg'}
  ];
});