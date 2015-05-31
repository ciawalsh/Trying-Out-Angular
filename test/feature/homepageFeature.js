describe('Shop App', function() {

  describe('Item List view', function() {

    beforeEach(function(){
      browser.get('index.html');
    });

    it('Should display all items and then filter the item list as a user types into the search box', function() {
      
      var itemList = element.all(by.repeater('item in items'));
      var query = element(by.model('query'));

      expect(itemList.count()).toBe(13);

      query.sendKeys('Blue');
      expect(itemList.count()).toBe(2);

      query.clear();
      query.sendKeys('Footwear');
      expect(itemList.count()).toBe(5);

    });

    it('should be possible to control the order of the items drop down sort box', function() {

      var itemNameColumn = element.all(by.repeater('item in items').column('item.name'));
      var query = element(by.model('query'));

      function getNames() {
        return itemNameColumn.map(function(elem) {
          return elem.getText();
        });
      }

      query.sendKeys('red');

      expect(getNames()).toEqual([
        "Flip Flops",
        "Cotton Shorts"
      ]);

      element(by.model('orderProp')).element(by.css('option[value="name"]')).click();

      expect(getNames()).toEqual([
        "Cotton Shorts",
        "Flip Flops"
      ]);

    });

    it('shows the name of a product', function() {
      var item = element.all(by.binding('item.name')).first();
      expect(item.getText()).toContain('Almond Toe Court Shoes');
    });

    it('', function() {
      var item = element.all(by.binding('item.colour')).first();
      expect(item.getText()).toContain('Patent Black');
    });

    it('', function() {
      var item = element.all(by.binding('item.price')).first();
      expect(item.getText()).toContain('£99.00');
    });

    it('', function() {
      var item = element.all(by.binding('item.stock')).first();
      expect(item.getText()).toContain('5');
    });

    it('', function() {
      var item = element.all(by.binding('item.category')).first();
      expect(item.getText()).toContain("Women's Footwear");
    });

    it('', function() {
      var itemList = element.all(by.repeater('item in items')).first();
      var source = itemList.element(by.tagName('img')).getAttribute('src');
      expect(source).toEqual("http://localhost:8000/app/images/Almond-Toe-Patent.jpeg");
    });

  });

});
