const { Router } = require('express');
const router = Router();

const ColecoesController = require('../controllers/colecoes-controller');
const colecoesController = new ColecoesController();

router.post('/insert', (req, res) => colecoesController.insertPersonagemColecao(req, res));
router.get('/list/:id', (req, res) => colecoesController.listColecaoDoUsuario(req, res));
router.delete('/delete/:id/personagem/:id_item', (req, res) => colecoesController.deleteItemColecao(req, res));

module.exports = router;