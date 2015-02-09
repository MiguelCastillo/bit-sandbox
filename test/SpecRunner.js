var chai = require("chai");

window.chai   = chai;
window.expect = chai.expect;
window.assert = chai.assert;

mocha.setup("bdd");

require([
  "test/spec/amd",
  "test/spec/cjs",
  "test/spec/register",
  "test/spec/6import-sayhi",
  "test/spec/6export-class"
], function() {
  mocha.run();
});
