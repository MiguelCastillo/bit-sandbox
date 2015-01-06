var bitloader = Bitloader.config({
  "baseUrl": "../",
  "paths": {
    "mocha": "node_modules/mocha/mocha",
    "chai": "node_modules/chai/chai",
    "cjs": "tests/lib/transforms/cjs",
    "usestrict": "tests/lib/transforms/usestrict",
    "print": "tests/lib/transforms/print",
    "sourceurl": "tests/lib/transforms/sourceurl"
  },
  "shim": {
    "mocha": {
      "exports": "mocha"
    }
  },
  "transforms": ["print"],
  "urlArgs": 'bust=' + (new Date()).getTime()
});

var define  = bitloader.define;
var require = bitloader.require;
