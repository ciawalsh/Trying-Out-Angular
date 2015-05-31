var shopApp = angular.module('shopApp', [
  'ngResource',
  'ngRoute'
]);

shopApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/items', {
        templateUrl: 'partials/item-list.html'
      }).
      // --- add more pages here ---
      when('/basket', {
        templateUrl: 'partials/basket.html'
      }).
      otherwise({
        redirectTo: '/items'
      });
  }
]);
