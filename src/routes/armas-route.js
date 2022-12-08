const { Router } = require('express');
const router = Router();
const {isAuth} = require('../middlewares/isAuth');
const ArmasController = require('../controllers/armas-controller');
const armasController = new ArmasController();

router.post('/create', isAuth,  (req, res) => armasController.create(req, res));
router.get('/detail/:id', isAuth, (req, res) => armasController.detail(req, res));
router.get('/list', isAuth, (req, res) => armasController.listaArmas(req, res));
router.get('/list-by-weapon/:id', isAuth, (req, res) => armasController.listaPersonagemPorArma(req, res));

module.exports = router;