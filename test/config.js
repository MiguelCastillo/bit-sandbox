var System = (function() {
  var importer = bitimports.config({
    "baseUrl": "../",
    "paths": {
      "mocha": "node_modules/mocha/mocha",
      "chai": "node_modules/chai/chai",
      "usestrict": "test/lib/transforms/usestrict",
      "print": "test/lib/transforms/print",
      "babel": "node_modules/babel-bits/dist/index",
      "sourceurl": "test/lib/transforms/sourceurl"
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
        ignore:["chai", "babel"]
      },
      "usestrict", "babel", "print"
    ]
  });

  /**
   * Simple filter for excluding particular modules from being processed by the transformation pipeline.
   */
  function ignore(moduleMeta) {
    var ignoreList = this.ignore;
    return !(ignoreList && ignoreList.length && ignoreList.indexOf(moduleMeta.name) !== -1);
  }

  return importer;
})();
