var chai = require("chai");

window.chai   = chai;
window.expect = chai.expect;
window.assert = chai.assert;

mocha.setup("bdd");

require([
  "tests/specs/amd",
  "tests/specs/cjs",
  "tests/specs/6class"
], function() {
  mocha.run();
});
