const LivroService = require('../service/LivroService');

const livroService = new LivroService();

class LivroController {
  static async criarLivro(req, res) {
    const dados = req.body;

    try {
      const novoLivro = await livroService.criarItem(dados);
      return res.status(201).send(novoLivro);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  static async editarLivro(req, res) {
    const { id } = req.params;
    const dados = req.body;

    try {
      await livroService.editarItem(id, dados);
      return res.status(200).send({ message: 'Livro alterado com sucesso' });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  static async listarLivros(req, res) {
    try {
      const livros = await livroService.buscarItens();
      return res.status(200).send(livros);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  static async listarLivroPorId(req, res) {
    const { id } = req.params;

    try {
      const livro = await livroService.buscarItemPorId(id);
      return res.status(200).send(livro);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  static async apagarLivro(req, res) {
    const { id } = req.params;

    try {
      await livroService.deletarItem(id);
      return res
        .status(202)
        .send({ message: `Livro id: ${id} apagado com sucesso` });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }
}

module.exports = LivroController;
