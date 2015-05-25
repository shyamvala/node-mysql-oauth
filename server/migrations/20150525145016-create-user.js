'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1
      },
      first_name: {
        type: Sequelize.STRING(30)
      },
      middle_name: {
        type: Sequelize.STRING(30)
      },
      last_name: {
        type: Sequelize.STRING(30)
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      logging: console.log
    }
  )},
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};
