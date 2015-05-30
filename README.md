bit-sandbox
=================

> Sandbox for testing [bit-imports](https://github.com/MiguelCastillo/bit-imports)

You can use this to author and test plugins, to play around with bit-imports and [babel](https://babeljs.io/) in the browser. Or just play around with different bit imports options and features.

The setup is a collection of small unit test using `CJS`, `AMD`, and `ES2015` modules and features, which are executed with [mochajs](http://mochajs.org/). These unit tests use [chaijs](http://chaijs.com/) for handling assertions. Using [mochajs](http://mochajs.org/) as the executing platform also illustrates how you can get your unit tests up and running using `ES2015` features, right in the browser via [babel](https://babeljs.io/)


### Getting started

1. Clone this project.
2. Run `npm install`
3. Run `grunt serve`

Open up your dev tools to see what the code looks like in the browser with source maps.

> If you are using Chrome, you can take a peek in `(no domain)` in the Sources tab to see the raw source without source maps applied.

<img src="https://raw.githubusercontent.com/MiguelCastillo/bit-sandbox/master/img/sources.png" alt="Sources with and without source maps"></img>
<img src="https://raw.githubusercontent.com/MiguelCastillo/bit-sandbox/master/img/no-domain.png" alt="Raw modules with source maps"></img>
