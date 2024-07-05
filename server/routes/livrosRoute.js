import { Router } from 'express';
import LivroController from '../controllers/LivroController.js';

const router = Router();
// const listaLivros = [{ nome: 'livro 1' }, { nome: 'livro 2' }, { nome: 'livro 3' }];

router.get('/livros', LivroController.listaLivros);
router.post('/livros', LivroController.criaLivro);

export default router;
