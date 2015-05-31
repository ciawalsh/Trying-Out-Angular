describe('Voucher', function() {

  beforeEach(function() {
    browser.get('/app/');
  });

  function addToBasket(item) {
    element.all(by.css('.add-to-basket')).get(item).click();
    $("#basket").click();
  };

  it('can apply the FIVEOFF voucher', function() {
    addToBasket(0);
    $('#voucher-input').sendKeys('FIVEOFF');
    expect($('#total').getText()).toContain("£94.00");
  });

  it('can apply the TENOFF voucher', function() {
    addToBasket(0);
    $('#voucher-input').sendKeys('TENOFF');
    expect($('#total').getText()).toContain("£89.00");
  });

  it("can't apply the TENOFF voucher if not met requirement", function() {
    addToBasket(1);
    $('#voucher-input').sendKeys('TENOFF');
    expect($('#total').getText()).toContain("£42.00");
  });

  it('can apply the SHOES voucher', function() {
    addToBasket(0);
    $('#voucher-input').sendKeys('SHOES');
    expect($('#total').getText()).toContain("£84.00");
  }); 

  it("can't apply the SHOES voucher if not met requirement", function() {
    addToBasket(1);
    $('#voucher-input').sendKeys('SHOES');
    expect($('#total').getText()).toContain("£42.00");
  }); 

});