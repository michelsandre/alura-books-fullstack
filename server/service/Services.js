const dataSource = require('../database/models');

class Services {
  constructor(modelName) {
    this.model = modelName;
  }
  verificaId(id) {
    if (!Number(id)) {
      throw new Error('ID não é valido');
    }
  }

  async criarItem(data) {
    return dataSource[this.model].create(data);
  }

  async editarItem(id, data) {
    this.verificaId(id);
    return dataSource[this.model].update(data, { where: { id } });
  }

  async buscarItens() {
    return dataSource[this.model].findAll();
  }

  async buscarItemPorId(id) {
    this.verificaId(id);
    return dataSource[this.model].findByPk(id);
  }

  async deletarItem(id) {
    this.verificaId(id);
    return dataSource[this.model].destroy({ where: { id } });
  }
}

module.exports = Services;
