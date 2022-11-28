const { Router } = require('express');
const router = Router();

const ElementosController = require('../controllers/elementos-controller');
const elementosController = new ElementosController();

router.post('/create', (req, res) => elementosController.create(req, res));
router.get('/detail', (req, res) => elementosController.detail(req, res));
router.get('list', (req, res)=>elementosController.listaElementos(req, res));
router.get('/list-by-element/:id',(req, res)=> elementosController.listaPersonagemPorElemento(req, res));

module.exports=router;
