# Testing in Angular 
### A small shopping experience built with Angular.

![image](https://raw.githubusercontent.com/ciawalsh/Trying-Out-Angular/master/app/images/Screen%20Shot.png)

## Intro

This is my first attempt at Angular. This is a small responsive retail web app. There is an API that reads a JSON file of clothes that Angular sorts to create small 'Clothing Widgets' to be able to add to your basket. These are the following user stories I strived to satisfy;

* [ ] - As a User I can add a product to my shopping cart.
* [ ] - As a User I can remove a product from my shopping cart.
* [ ] - As a User I can view the total price for my products in my shopping cart.
* [ ] - As a User I can apply a voucher to my shopping cart.
* [ ] - As a User I can view the total price for the products in my shopping cart with discounts applied.
* [ ] - As a User I am alerted when I apply an invalid voucher to my shopping cart.
* [ ] - As a User, I am unable to put 'Out of Stock' products into the shopping cart.

## Try it out

#### To see it run or see the code on your desktop/laptop.

Please follow the commands on your terminal to download a copy of the app;

```
git clone https://github.com/ciawalsh/Trying-Out-Angular.git
cd AngularShop
```

##### Install Dependencies

I have preconfigured `npm` to automatically run `bower` so you can simply do:

```
npm install
```

#### Running the Application

I have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse the app at `http://localhost:8000/app/index.html`.

### Running Unit Tests

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

### End to end testing

Protractor simulates interaction with the web app and verifies that the application responds
correctly. Therefore, the web server needs to be serving up the application, so that Protractor
can interact with it.

```
npm start
```

In addition, since Protractor is built upon WebDriver you need to install this.  The angular-seed
project comes with a predefined script to do this:

```
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.

## Technologies

- JavaScript
- HTML & CSS
- AngularJS
- Node.js
- Bootstrap

## Approach

- TBA

## Improvement

Looking over my project objectively there are a few areas i would improve on;

* [ ] - Improve the responsiveness of the website.
