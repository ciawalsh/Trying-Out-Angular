describe('Basket', function() {

  beforeEach(function() {
    browser.get('/app/');
  });

  function addToBasket() {
    $('.add-to-basket').click();
    $("#basket").click();
  };

  function removeFromBasket() {
    $("#remove-item").click();
  };

  it('can add items to basket', function() { 
    addToBasket();
    var basket = element.all(by.repeater('item in basket'));
    expect(basket.count()).toEqual(1);
  });

  it('can remove items from the basket', function() { 
    addToBasket();
    removeFromBasket();
    var basket = element.all(by.repeater('item in basket'));
    expect(basket.count()).toEqual(0);
  });

  it('can show the total price for the items in the basket', function() { 
    addToBasket();
    expect($('#total').getText()).toContain("£99.00");
  });

});