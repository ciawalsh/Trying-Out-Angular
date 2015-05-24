var shopApp = angular.module('shopApp', [
  'ngRoute',
  'shopControllers'
]);

shopApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/items', {
        templateUrl: 'partials/item-list.html',
        controller: 'ShopListCtrl'
      }).
      // --- add more pages here ---
      when('/basket', {
        templateUrl: 'partials/basket.html',
      }).
      otherwise({
        redirectTo: '/items'
      });
  }
]);
