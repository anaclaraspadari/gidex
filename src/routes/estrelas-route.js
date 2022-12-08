const { Router } = require('express');
const router = Router();
const {isAuth} = require('../middlewares/isAuth');
const EstrelasController = require('../controllers/estrelas-controller');
const estrelasController = new EstrelasController();

router.post('/star', isAuth,  (req, res) => estrelasController.favoritarItem(req, res));
router.delete('/unstar', isAuth, (req, res) => estrelasController.desfavoritarItem(req, res));

module.exports = router;
