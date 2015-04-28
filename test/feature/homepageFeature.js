describe('Shop App', function() {

  describe('Item List view', function() {

    beforeEach(function(){
      browser.get('index.html');
    });

    it('Should filter the item list as a user types into the search box', function() {
      
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

  });

});
