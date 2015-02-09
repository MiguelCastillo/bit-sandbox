var require = (function() {

  var importer = Bitimports.config({
    "baseUrl": "../",
    "paths": {
      "mocha": "node_modules/mocha/mocha",
      "chai": "node_modules/chai/chai",
      "usestrict": "test/lib/transforms/usestrict",
      "print": "test/lib/transforms/print",
      "6to5": "node_modules/6to5-bits/dist/index",
      "sourceurl": "test/lib/transforms/sourceurl"
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
        name: "6to5"
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
