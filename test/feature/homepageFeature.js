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

  });

});
