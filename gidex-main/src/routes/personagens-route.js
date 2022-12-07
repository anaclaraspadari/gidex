const { Router } = require('express');
const router = Router();

const PersonagensController = require('../controllers/personagens-controller');
const personagensController = new PersonagensController();

router.post('/create', (req, res) => personagensController.create(req, res));
router.get('/detail/:id', (req, res) => personagensController.detail(req, res));
router.get('/list', (req, res) => personagensController.listaPersonagens(req, res));

module.exports = router;