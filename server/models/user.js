'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    uuid: DataTypes.UUID,
    first_name: DataTypes.STRING(30),
    middle_name: DataTypes.STRING(30),
    last_name: DataTypes.STRING(30),
    email: DataTypes.STRING,
    password: DataTypes.STRING(30),
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};