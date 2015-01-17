var _6to5 = require("6to5-core");

module.exports = function(moduleMeta) {
  moduleMeta.source = _6to5.transform(moduleMeta.source, {
    filename: moduleMeta.file.toUrl(),
    filenameRelative: true,
    sourceMap: false
  }).code;
};
