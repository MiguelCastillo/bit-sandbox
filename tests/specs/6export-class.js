var sayhi = require("tests/js/6export-class");

describe("ES6 Class Export - Test suite", function() {
  it("first is `Brian`", function() {
    expect(sayhi.first).to.equal("Brian");
  });

  it("last is `Genisio`", function() {
    expect(sayhi.last).to.equal("Genisio");
  });

  it("toString is `Brian Genision`", function() {
    expect(sayhi.toString()).to.equal("Brian Genisio");
  });
});
