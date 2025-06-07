const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// /api/productos/buscar?nombre=xxx
router.get('/buscar', productController.buscarProductos);

// /api/productos/:id/historial?tiendaId=#
router.get('/:id/historial', productController.obtenerHistorialPrecios);

// /api/productos/:id
router.get('/:id', productController.obtenerProductoPorId);

// /api/productos/:id/tiendas-precios-actuales
router.get('/:id/tiendas-precios-actuales', productController.obtenerTiendasYPreciosProducto);


module.exports = router;
