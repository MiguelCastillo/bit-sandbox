var require = (function() {

  var importer = Bitimports.config({
    "baseUrl": "../",
    "paths": {
      "mocha": "node_modules/mocha/mocha",
      "chai": "node_modules/chai/chai",
      "usestrict": "tests/lib/transforms/usestrict",
      "print": "tests/lib/transforms/print",
      "6to5": "tests/lib/transforms/6to5",
      "sourceurl": "tests/lib/transforms/sourceurl"
    },
    "shim": {
      "mocha": {
        "exports": "mocha"
      }
    },
    "transforms": [
      {
        handler: ignore,
        ignore:["chai", "6to5"]
      }, {
        name: "usestrict"
      }, {
        name: "print"
      }, {
        name: "6to5"
      }
    ]
  });

  /**
   * Simple filter for excluding particular modules from being processed by the transformation pipeline.
   */
  function ignore(moduleMeta) {
    var ignoreList = this.ignore;
    return !(ignoreList && ignoreList.length && ignoreList.indexOf(moduleMeta.name) !== -1);
  }

  return importer.require;
})();
