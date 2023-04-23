const { Router } = require('express');
const router = Router();
const locacaoController = require('../controllers/locacaoController');

router.get('/', locacaoController.verTodaslocacoes);

router.get('/:id', locacaoController.verlocacaoPorId);

router.get('/user/:id', locacaoController.verlocacoesPorUsuario);

router.post('/', locacaoController.criarlocacao);

router.patch('/:id', locacaoController.atualizarlocacao);

router.delete('/:id', locacaoController.deletarlocacao);

module.exports = router;