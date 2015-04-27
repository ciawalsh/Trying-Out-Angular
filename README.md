# Testing in Angular — A small shopping experience on a single page app.

## Getting Started

?

### Prerequisites

?

```
git clone https://github.com/ciawalsh/Trying-Out-Angular.git
cd AngularShop
```

### Install Dependencies

I have preconfigured `npm` to automatically run `bower` so you can simply do:

```
npm install
```

### Run the Application

I have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.

## Running Unit Tests

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

## End to end testing

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

