const express = require('express');
const router = express.Router();
const tiendaController = require('../controllers/tiendaController');

router.get('/nombres', tiendaController.obtenerNombresTiendas);
router.get('/valoraciones', tiendaController.obtenerValoracionesTiendas);

router.get('/resumen', tiendaController.obtenerResumenTiendas);

module.exports = router;