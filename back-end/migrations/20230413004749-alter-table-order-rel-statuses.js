'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('order_rel_statuses', {
      fields: ['user_id'],      
      type: 'foreign key',
      name: 'order_rel_statuses_users_fk',    
      references: {
        table: 'users',        //Tabela estrangeira
        field: 'id'             //Campo da tabela estrangeira
      },
      onDelete: 'RESTRICT',     //Não deixa apagar um customer em uso no customer_tags
      onUpdate: 'CASCADE'       //Atualiza tag_id em customer_tags se id em tags mudar
    })
    await queryInterface.addConstraint('order_rel_statuses', {
      fields: ['order_status_id'],      
      type: 'foreign key',
      name: 'order_rel_statuses_order_statuses_fk',    
      references: {
        table: 'order_satuses',        //Tabela estrangeira
        field: 'id'             //Campo da tabela estrangeira
      },
      onDelete: 'RESTRICT',     //Não deixa apagar um customer em uso no customer_tags
      onUpdate: 'CASCADE'       //Atualiza tag_id em customer_tags se id em tags mudar
    })
    await queryInterface.addConstraint('order_rel_statuses', {
      fields: ['order_id'],      
      type: 'foreign key',
      name: 'order_rel_statuses_orders_fk',    
      references: {
        table: 'orders',        //Tabela estrangeira
        field: 'id'             //Campo da tabela estrangeira
      },
      onDelete: 'RESTRICT',     //Não deixa apagar um customer em uso no customer_tags
      onUpdate: 'CASCADE'       //Atualiza tag_id em customer_tags se id em tags mudar
    })

  },

  
  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('order_rel_statuses', 'order_rel_statuses_orders_fk')
    await queryInterface.removeConstraint('order_rel_statuses', 'order_rel_statuses_order_statuses_fk')
    await queryInterface.removeConstraint('order_rel_statuses', 'order_rel_statuses_users_fk')
  }
};
