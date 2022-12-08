const { Router } = require('express');
const router = Router();

const {isAuth} = require('../middlewares/isAuth');
const TalentosController = require('../controllers/talentos-controller');
const talentosController = new TalentosController();

router.post('/create', isAuth, (req, res) => talentosController.create(req, res));
router.get('/detail/:id', isAuth, (req, res) => talentosController.detail(req, res));
router.get('/list', isAuth, (req, res) => talentosController.listaTalentos(req, res));
router.get('/list-by-talent/:id', isAuth, (req, res) => talentosController.listaPersonagemPorTalento(req, res));

module.exports = router;