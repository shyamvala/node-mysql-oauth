'use strict';
var helper = require("../../spec_helper")
var db = require(helper.modelsPath)

beforeEach(function(done) {
  db.sequelize.sync({force: true})
    .then(function() {
      done();
    });
});

describe("USER Model", function () {

  it("should create the user with a UUID", function(done) {
    db.User.create({email: "foo@test.com",password: "bar"})
      .should.be.fulfilled.then(function(user) {
        expect(user.email).to.equal("foo@test.com")
        expect(user.password).to.equal("bar")
        expect(user.id).to.equal(1)
      }).should.notify(done);
  });

});
