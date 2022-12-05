const { Router } = require('express');
const router = Router();

const ArmasController = require('../controllers/armas-controller');
const armasController = new ArmasController();

router.post('/create', (req, res) => armasController.create(req, res));
router.get('/detail/:id', (req, res) => armasController.detail(req, res));
router.get('/list', (req, res) => armasController.listaArmas(req, res));
router.get('/list-by-weapon/:id', (req, res) => armasController.listaPersonagemPorArma(req, res));

module.exports = router;