# EFP Discount Calculator

An online calculator for discounts in Brewdog bars for EFP's.

### Development

Pre-requisites: [npm](https://www.npmjs.org/). Once you have npm installed, run:

```
$ npm install
```

This will install Grunt, a task runner currently used to minify the JS code. `Gruntfile` is configured to run uglify on `js/calculator.js` to `app.js` which is linked in the index.html file. So if you change the source file (`js/calculator.js`), you need to run `grunt` in the command line for `js/app.js` to be rewritten and the page updated.

### 

CSS: [bulma](https://bulma.io/)
Build Tool: [grunt](https://gruntjs.com/)
