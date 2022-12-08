const { Router } = require('express');
const router = Router();

const {isAuth} = require('../middlewares/isAuth');
const ElementosController = require('../controllers/elementos-controller');
const elementosController = new ElementosController();

router.post('/create', isAuth, (req, res) => elementosController.create(req, res));
router.get('/detail/:id', isAuth, (req, res) => elementosController.detail(req, res));
router.get('/list', isAuth, (req, res) => elementosController.listaElementos(req, res));
router.get('/list-by-element/:id', isAuth, (req, res) => elementosController.listaPersonagemPorElemento(req, res));

module.exports = router;