const dataSource = require('../database/models');

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async criarItem(data) {
    return dataSource[this.model].create(data);
  }

  async buscarItens() {
    return dataSource[this.model].findAll();
  }

  async buscarItemPorId(id) {
    return dataSource[this.model].findByPk(id);
  }
}

module.exports = Services;
