const { Router } = require('express');
const router = Router();

const UsuariosController = require('../controllers/usuarios-controller');
const usersController = new UsuariosController();

router.post('/create', (req, res) => usersController.create(req, res));
router.post('/auth', (req, res) => usersController.auth(req, res));

router.get('/list', (req, res) => usersController.list(req, res));
router.get('/profile', (req, res) => usersController.profile(req, res));
router.post('/insert', (req, res) => usersController.insertPersonagemUsuario(req, res));
router.get('/list/:id', (req, res) => usersController.listPersonagemUsuario(req, res));
router.delete('/delete/:id/personagem/:id_item', (req, res) => usersController.deletePersonagemUsuario(req, res));

module.exports = router;