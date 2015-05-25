'use strict';
var helper = require("../../spec_helper")
var db = require(helper.modelsPath)

beforeEach(function(done) {
  db.sequelize.sync({force: true});
  done();
});

describe("USER Model", function () {

  it("should create the user with a UUID", function(done) {
    db.User
      .create({email: "foo@test.com",password: "bar"})
      .then(function(user) {
        expect(user.uuid).not.to.be.null
      });
    done();
  });

});
