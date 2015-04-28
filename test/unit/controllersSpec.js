describe('shopApp controllers', function() {

  describe('ShopListCtrl', function(){

    beforeEach(module('shopApp'));

    it('should create "items" model with all the items of clothing', inject(function($controller) {
      var scope = {},
          ctrl = $controller('ShopListCtrl', {$scope:scope});

      expect(scope.items.length).toBe(13);
    }));

  });

});

