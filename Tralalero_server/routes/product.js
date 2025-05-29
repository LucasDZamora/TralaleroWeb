const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Ruta GET /api/productos/buscar?nombre=xxx
router.get('/buscar', productController.buscarProductos);

module.exports = router;


// Ruta GET /api/productos/:id
router.get('/:id', productController.obtenerProductoPorId);