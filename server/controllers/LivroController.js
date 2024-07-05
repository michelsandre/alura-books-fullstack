const livros = [];

class LivroController {
  static criaLivro(req, res) {
    const { nome, autor } = req.body;

    const novoLivro = {
      nome,
      autor,
    };

    livros.push(novoLivro);
    return res.status(201).send({ message: 'Livro criado', novoLivro });
  }

  static listaLivros(req, res) {
    return res.status(200).send(livros);
  }
}

export default LivroController;
