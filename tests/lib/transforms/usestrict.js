function useStrict(moduleMeta) {
  if (moduleMeta.hasOwnProperty("source")) {
    // Add logic to insert `use strict` only in function bodies.
    //moduleMeta.source = "'use strict';" + moduleMeta.source;
  }
}

module.exports = useStrict;
