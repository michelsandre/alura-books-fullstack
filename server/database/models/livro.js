'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Livro.init(
    {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Nome do livro é obrigatório' },
        },
      },
      autor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Endereço da imagem obrigatoria' },
        },
      },
      url: {
        type: DataTypes.STRING,
        allowNull: true,
        // validate: {
        //   notNull: { msg: 'Nome do autor é obrigatório' },
        // },
      },
      descricao: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      favorito: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Livro',
      tableName: 'livros',
    }
  );
  return Livro;
};
