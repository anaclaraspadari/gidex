const { Router } = require('express');
const router = Router();

const {isAuth} = require('../middlewares/isAuth');
const NacoesController = require('../controllers/nacoes-controller');
const nacoesController = new NacoesController();

router.post('/create', isAuth, (req, res) => nacoesController.create(req, res));
router.get('/detail/:id', isAuth, (req, res) => nacoesController.detail(req, res));
router.get('/list', isAuth, (req, res) => nacoesController.listaNacoes(req, res));
router.get('/list-by-nation/:id', isAuth, (req, res) => nacoesController.listaPersonagemPorNacao(req, res));

module.exports = router;