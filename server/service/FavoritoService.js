const Services = require('./Services');
const dataSource = require('../database/models');

class FavoritoService extends Services {
  constructor() {
    super('Livro');
  }

  async buscarFavoritos() {
    return dataSource[this.model].findAll({
      where: {
        favorito: true,
      },
    });
  }
}

module.exports = FavoritoService;
