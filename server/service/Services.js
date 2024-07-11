const dataSource = require('../database/models');

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async criarItem(data) {
    return dataSource[this.model].create(data);
  }

  async editarLivro(id, data) {
    return dataSource[this.model].update(data, { where: { id } });
  }

  async buscarItens() {
    return dataSource[this.model].findAll();
  }

  async buscarItemPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async deletarItem(id) {
    return dataSource[this.model].destroy({ where: { id } });
  }
}

module.exports = Services;
