var detective = require('detective');

function detectiveTransform(moduleMeta) {
  if (!moduleMeta.hasOwnProperty("source")) {
     return;
  }

  var deps = detective(moduleMeta.source);
  if (deps.length) {
    return moduleMeta.manager.import(deps);
  }
}

module.exports = detectiveTransform;
