describe('Shop App controllers', function() {

  describe('ShopListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(module('shopApp'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('items/items.json').
        respond([{name: 'Suade Shoes'}, {name: 'Flip Flops'}]);

      scope = $rootScope.$new();
      ctrl = $controller('ShopListCtrl', {$scope:scope});
    }));

    it('should create an item model with 2 items fetched from the json file', function() {
      expect(scope.items).toBeUndefined();
      $httpBackend.flush();

      expect(scope.items).toEqual([{name: 'Suade Shoes'},
                                   {name: 'Flip Flops'}]);

    });

  });
  
});

