const { Router } = require('express');
const router = Router();

const TalentosController = require('../controllers/talentos-controller');
const talentosController = new TalentosController();

router.post('/create', (req, res) => talentosController.create(req, res));
router.get('/detail/:id', (req, res) => talentosController.detail(req, res));
router.get('/list', (req, res) => talentosController.listaTalentos(req, res));
router.get('/list-by-talent/:id', (req, res) => talentosController.listaPersonagemPorTalento(req, res));

module.exports = router;