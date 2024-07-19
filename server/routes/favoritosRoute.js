const { Router } = require('express');
const FavoritoController = require('../controllers/FavoritoController.js');

const router = Router();

router.get('/favoritos', FavoritoController.listarFavoritos);
// router.get('/livros/:id', FavoritoController.listarLivroPorId);
// router.put('/livros/:id', FavoritoController.editarLivro);
// router.post('/livros', FavoritoController.criarLivro);
// router.delete('/livros/:id', FavoritoController.apagarLivro);

module.exports = router;
