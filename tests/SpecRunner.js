//var chai = require("chai");
//require("tests/specs/index");
//
//window.chai   = chai;
//window.expect = chai.expect;
//window.assert = chai.assert;
//
//mocha.setup("bdd");
//mocha.run();

define([
  "chai"
], function(chai) {

  window.chai   = chai;
  window.expect = chai.expect;
  window.assert = chai.assert;

  mocha.setup("bdd");

  require([
    "tests/specs/index"
  ], function() {
    mocha.run();
  });
});
