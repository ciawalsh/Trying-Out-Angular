describe('shopApp controllers', function() {

  describe('ShopListCtrl', function(){

    beforeEach(module('shopApp'));

    it('should create "items" model with at least 1 item of clothing', inject(function($controller) {
      var scope = {},
          ctrl = $controller('ShopListCtrl', {$scope:scope});

      expect(scope.items.length).toBe(1);
    }));

  });

});

