/* jshint unused: false */
var System = (function() {
  var importer = bitimports.config({
    "baseUrl": "../",
    "paths": {
      "mocha": "node_modules/mocha/mocha",
      "chai": "node_modules/chai/chai",
      "usestrict": "test/lib/transforms/usestrict",
      "print": "test/lib/transforms/print",
      "babel": "node_modules/babel-bits/dist/index",
      "sourceurl": "test/lib/transforms/sourceurl",
      "t1": "test/lib/transforms/t1",
      "t2": "test/lib/transforms/t2",
      "t3": "test/lib/transforms/t3",
      "t4": "test/lib/transforms/t4"
    },
    "shim": {
      "mocha": {
        "exports": "mocha"
      }
    }
  });


  importer.ignore("chai");

  importer.plugin("js", {
    transform: [
      "usestrict", "t1", "t2", "t3", "t4", {
        handler: "babel",
        options: {
          sourceMaps: "inline"
        }
      }, "print"
    ]
  });

  return importer;
})();
