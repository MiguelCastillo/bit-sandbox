var require = (function() {
  "use strict";

  var importer = Bitimports.config({
    "baseUrl": "../",
    "paths": {
      "mocha": "node_modules/mocha/mocha",
      "chai": "node_modules/chai/chai",
      "usestrict": "tests/lib/transforms/usestrict",
      "print": "tests/lib/transforms/print",
      "sourceurl": "tests/lib/transforms/sourceurl"
    },
    "shim": {
      "mocha": {
        "exports": "mocha"
      }
    },
    "transforms": [
      {
        name: "ignore",
        handler: ignore,
        ignore:["chai"]
      }, {
        name: "print"
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
