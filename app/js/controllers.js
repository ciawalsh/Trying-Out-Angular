var shopApp = angular.module('shopApp', []);

shopApp.controller('ShopListCtrl', function($scope) {
  $scope.items = [
    {
     'name': 'Almond Toe Court Shoes',
     'colour': 'Patent Black',
     'price': 99.00,
     'stock': 5,
     'category': 'Woman\'s Footwear',
     'image': 'images/Almond-Toe-Patent.jpeg'
    },
    {
     'name': 'Suede Shoes',
     'colour': 'Blue',
     'price': 42.00,
     'stock': 4,
     'category': 'Woman\'s Footwear',
     'image': 'images/Blue-Suede-Shoes.jpg'
    },
    {
     'name': 'Leather Driver Saddle Loafers',
     'colour': 'Tan',
     'price': 34.00,
     'stock': 12,
     'category': 'Men\'s Footwear',
     'image': 'images/Tan-Tassel-Loafers.jpeg'
    },
    {
     'name': 'Flip Flops',
     'colour': 'Red',
     'price': 19.00,
     'stock': 6,
     'category': 'Men\'s Footwear',
     'image': 'images/Red-Flip-Flops.jpg'
    },
    {
     'name': 'Flip Flops',
     'colour': 'Blue',
     'price': 19.00,
     'stock': 0,
     'category': 'Men\'s Footwear',
     'image': 'images/Blue-Flip-Flops.jpg'
    },
    {
     'name': 'Gold Button Cardigan',
     'colour': 'Black',
     'price': 167.00,
     'stock': 6,
     'category': 'Woman\'s Casualwear',
     'image': 'images/Gold-Button-Cardigan-Black.jpeg'
    },
    {
     'name': 'Cotton Shorts',
     'colour': 'Medium Red',
     'price': 30.00,
     'stock': 5,
     'category': 'Women\'s Casualwear',
     'image': 'images/Cotton-Shorts-MediumRed.jpg'
    },
    {
     'name': 'Fine Stripe Short Sleeve Shirt',
     'colour': 'Grey',
     'price': 49.99,
     'stock': 9,
     'category': 'Men\'s Casualwear',
     'image': 'images/Fine-Stripe-Shirt-Grey.jpeg'
    },
    {
     'name': 'Fine Stripe Short Sleeve Shirt',
     'colour': 'Green',
     'price': 39.99,
     'stock': 3,
     'category': 'Men\'s Casualwear',
     'image': 'images/Fine-Stripe-Shirt-Green.jpg'
    },
    {
     'name': 'Sharkskin Waistcoat',
     'colour': 'Charcoal (Black)',
     'price': 75.00,
     'stock': 2,
     'category': 'Men\'s Formalwear',
     'image': 'images/Waistcoat-Charcoal.jpeg'
    },
    {
     'name': 'Lightweight Patch Pocket Blazer',
     'colour': 'Deer',
     'price': 175.50,
     'stock': 1,
     'category': 'Men\'s Formalwear',
     'image': 'images/Patch-Pocket-Blazer-Deer.jpeg'
    },
    {
     'name': 'Bird Print Dress',
     'colour': 'Black',
     'price': 270.00,
     'stock': 10,
     'category': 'Woman\'s Formalwear',
     'image': 'images/Bird-Print-Dress.png'
    },
    {
     'name': 'Mid Twist Cut-Out Dress',
     'colour': 'Pink',
     'price': 540.00,
     'stock': 5,
     'category': 'Woman\'s Formalwear',
     'image': 'images/Mid-Cut-Out-Dress-Pink.jpeg'
    }
  ];
});