'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('articles', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
        type: Sequelize.INTEGER
      },
      title:{
        type: Sequelize.STRING,
        allowNull: false
      },
      slug:{
        type: Sequelize.STRING,
        allowNull: false
      },
      body:{
        type: Sequelize.TEXT,
        allowNull:false
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categories', // Nome da tabela a ser referenciada
          key: 'id'            // Nome da chave primária da tabela referenciada
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',  // Ação ao deletar a categoria (opcional)
        allowNull: true        // Pode ser `false` se quiser obrigar a presença de uma categoria
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('articles')
  }
};
