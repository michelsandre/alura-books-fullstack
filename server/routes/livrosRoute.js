const { Router } = require('express');
const LivroController = require('../controllers/LivroController.js');

const router = Router();

router.get('/livros', LivroController.listarLivros);
router.get('/livros/:id', LivroController.listarLivroPorId);
router.patch('/livros/:id', LivroController.editarLivro);
router.post('/livros', LivroController.criarLivro);
router.delete('/livros/:id', LivroController.apagarLivro);

module.exports = router;
