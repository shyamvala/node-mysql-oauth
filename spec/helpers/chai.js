var chai = require('chai');

chai.config.includeStack = true;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;
