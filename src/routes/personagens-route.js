const { Router } = require('express');
const router = Router();

const {isAuth} = require('../middlewares/isAuth');
const PersonagensController = require('../controllers/personagens-controller');
const personagensController = new PersonagensController();

router.post('/create', isAuth, (req, res) => personagensController.create(req, res));
router.get('/detail/:id', isAuth, (req, res) => personagensController.detail(req, res));
router.get('/list', isAuth, (req, res) => personagensController.listaPersonagens(req, res));

module.exports = router;