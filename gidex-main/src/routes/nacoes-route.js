const { Router } = require('express');
const router = Router();

const NacoesController = require('../controllers/nacoes-controller');
const nacoesController = new NacoesController();

router.post('/create', (req, res) => nacoesController.create(req, res));
router.get('/detail/:id', (req, res) => nacoesController.detail(req, res));
router.get('/list', (req, res) => nacoesController.listaNacoes(req, res));
router.get('/list-by-nation/:id', (req, res) => nacoesController.listaPersonagemPorNacao(req, res));

module.exports = router;