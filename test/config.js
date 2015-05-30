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
      "sourceurl": "test/lib/transforms/sourceurl"
    },
    "shim": {
      "mocha": {
        "exports": "mocha"
      }
    }
  });


  importer.ignore({
    match: ["chai", "babel", "usestrict", "print"]
  });

  importer.plugin("js", {
    transform: [
      "usestrict", {
        handler: "babel",
        options: {
          sourceMaps: "inline"
        }
      }, "print"
    ]
  });

  return importer;
})();
