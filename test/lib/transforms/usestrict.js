function useStrict(moduleMeta) {
  // Add logic to insert `use strict` only in function bodies.
  moduleMeta.source = "'use strict';\n//added use strict\n\n" + moduleMeta.source;
}

module.exports = useStrict;
