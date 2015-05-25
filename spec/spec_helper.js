'use strict';
var path = require('path')
process.env.NODE_ENV = "test"
exports.basePath = path.join(__dirname, "..")
exports.serverPath = path.join(exports.basePath, 'server')
exports.modelsPath = path.join(exports.serverPath, "models")
require("./helpers/chai")
