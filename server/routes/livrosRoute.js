const { Router } = require('express');
const LivroController = require('../controllers/LivroController.js');

const router = Router();

router.get('/livros', LivroController.listarLivros);
router.post('/livros', LivroController.criarLivro);

module.exports = router;
