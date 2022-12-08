const { Router } = require('express');
const router = Router();

const {isAuth} = require('../middlewares/isAuth');
const UsuariosController = require('../controllers/usuarios-controller');
const usersController = new UsuariosController();

router.post('/create', (req, res) => usersController.create(req, res));
router.post('/auth', (req, res) => usersController.auth(req, res));
router.get('/list', isAuth, (req, res) => usersController.list(req, res));
router.get('/profile', isAuth, (req, res) => usersController.profile(req, res));
router.post('/insert', isAuth, (req, res) => usersController.insertPersonagemUsuario(req, res));
router.get('/list_peruser/:id', isAuth, (req, res) => usersController.listPersonagemUsuario(req, res));

router.delete('/delete/:id', isAuth, (req, res) => usersController.deletePersonagemUsuario(req, res));

module.exports = router;