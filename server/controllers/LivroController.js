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

  static async listarLivros(req, res) {
    try {
      const livros = await livroService.buscarItens();
      return res.status(200).send(livros);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }
}

module.exports = LivroController;
