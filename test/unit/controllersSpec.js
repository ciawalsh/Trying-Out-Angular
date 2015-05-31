describe('ShopListCtrl', function() {

  var scope, ctrl, $httpBackend;

  beforeEach(module('shopApp'));

  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('items/items.json').
      respond([{name: 'Almond Toe Court Shoes', price: 99, category: "Women's Footwear", stock: 1}, 
               {name: 'Flip Flops', price: 19, stock: 1, category: "Men's Footwear"},
               {name: 'Cotton Shorts', price: 30, stock: 1, category: "Men's Footwear"}]);
    scope = $rootScope.$new();
    ctrl = $controller('ShopListCtrl', {$scope: scope});
    $httpBackend.flush();
  }));

  it('should create an item model with 2 items fetched from the json file', function() {
    expect(scope.items).toEqual([{name: 'Almond Toe Court Shoes', price: 99, category: "Women's Footwear", stock: 1}, 
                                 {name: 'Flip Flops', price: 19, stock: 1, category: "Men's Footwear"},
                                 {name: 'Cotton Shorts', price: 30, stock: 1, category: "Men's Footwear"}]);

  });

  var addItem = function(choice) {
    scope.add(scope.items[choice]);
  };

  it('can add an item to the basket', function() {
    addItem(0);
    expect(scope.basket.length).toEqual(1);
  });

  it('can remove an item from the basket', function() {
    addItem(0);
    scope.removeItem(scope.items[0]);
    expect(scope.basket.length).toEqual(0);
  });

  it('can add up the total for the items in the basket', function() {
    addItem(0);
    addItem(1);
    addItem(2);
    scope.calculateTotal();
    expect(scope.total).toEqual(148);
  });

  it('can apply the FIVEOFF voucher', function() {
    addItem(0);
    scope.applyVoucher('FIVEOFF');
    expect(scope.discountedTotal).toEqual(94);
  });

  it('can apply the TENOFF voucher', function() {
    addItem(0);
    scope.applyVoucher('TENOFF');
    expect(scope.discountedTotal).toEqual(89);
  });

  it('can apply the SHOES voucher', function() {
    addItem(0);
    scope.applyVoucher('SHOES');
    expect(scope.discountedTotal).toEqual(84);
  });

  it("can not apply the TENOFF voucher if requirement isn't met", function() {
    addItem(1);
    scope.applyVoucher('TENOFF');
    expect(scope.total).toEqual(19);
  });

  it("can not apply the SHOES voucher if requirement isn't met", function() {
    addItem(1);
    scope.applyVoucher('SHOES');
    expect(scope.total).toEqual(19);
  });
  
});

