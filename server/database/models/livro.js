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
          notNull: { msg: 'Nome do autor é obrigatório' },
        },
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
