const { Router } = require('express');
const router = Router();

const UsuariosController = require('../controllers/usuarios-controller');
const usersController = new UsuariosController();

router.post('/create', (req, res) => usersController.create(req, res));
router.post('/auth', (req, res) => usersController.auth(req, res));

router.get('/list', (req, res) => usersController.list(req, res));
router.get('/profile', (req, res) => usersController.profile(req, res));
router.get('/delete/:id_user/:id_peruser', (req, res) => usersController.prodeletePersonagensUsuariosfile(req, res));

module.exports = router;