const FavoritoService = require('../service/FavoritoService');

const favoritoService = new FavoritoService();

class FavoritoController {
  // static async criarLivro(req, res) {
  //   const dados = req.body;

  //   try {
  //     const novoLivro = await livroService.criarItem(dados);
  //     return res.status(201).send(novoLivro);
  //   } catch (error) {
  //     return res.status(500).send({ message: error.message });
  //   }
  // }

  static async editarFavorito(req, res) {
    const { id } = req.params;
    const dados = req.body;

    try {
      await favoritoService.editarItem(id, dados);
      return res.status(200).send({ message: 'Livro alterado com sucesso' });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  static async listarFavoritos(req, res) {
    try {
      const favoritos = await favoritoService.buscarFavoritos();
      return res.status(200).send(favoritos);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  // static async listarLivroPorId(req, res) {
  //   const { id } = req.params;

  //   try {
  //     const livro = await livroService.buscarItemPorId(id);
  //     return res.status(200).send(livro);
  //   } catch (error) {
  //     return res.status(500).send({ message: error.message });
  //   }
  // }

  // static async apagarLivro(req, res) {
  //   const { id } = req.params;

  //   try {
  //     await livroService.deletarItem(id);
  //     return res
  //       .status(202)
  //       .send({ message: `Livro id: ${id} apagado com sucesso` });
  //   } catch (error) {
  //     return res.status(500).send({ message: error.message });
  //   }
  // }
}

module.exports = FavoritoController;
