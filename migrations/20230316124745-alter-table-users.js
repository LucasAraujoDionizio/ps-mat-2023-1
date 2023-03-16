'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    //renomeia os campos created_at e updated_at da tabela users
    //oara createdat e updatedat, respectivamente
    await queryInterface.renameColumn('users','created_at','createdAt')
    await queryInterface.renameColumn('users','updated_at','updatedAt')
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    //reverte as alterações feitas no up()
    await queryInterface.renameColumn('users','createdAt','created_at')
    await queryInterface.renameColumn('users','updatedAt','updated_at')
  }
};
