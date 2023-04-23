const { Router } = require('express');
const router = Router();
const recargaController = require('../controllers/recargaController');

router.get('/', recargaController.verTodasrecargas);

router.get('/:id', recargaController.verrecargaPorId);

router.get('/user/:id', recargaController.verrecargasPorUsuario);

router.post('/', recargaController.criarrecarga);

router.patch('/:id', recargaController.atualizarrecarga);

router.delete('/:id', recargaController.deletarrecarga);

module.exports = router;