const { Router } = require('express');
const router = Router();
const conserto_impressoracontroller = require('../controllers/conserto_impressoraController');

router.get('/', conserto_impressoracontroller.verTodosconsertosimp);

router.get('/:id', conserto_impressoracontroller.verconsertoimpPorId);

router.get('/user/:id', conserto_impressoracontroller.verconsertosimpPorUsuario);

router.post('/', conserto_impressoracontroller.criarconsertoimp);

router.patch('/:id', conserto_impressoracontroller.atualizarconsertoimp);

router.delete('/:id', conserto_impressoracontroller.deletarconsertoimp);

module.exports = router;