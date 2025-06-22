const { Tienda } = require('../models');

// 1. Obtener nombre de todas las tiendas
exports.obtenerNombresTiendas = async (req, res) => {
  try {
    const tiendas = await Tienda.findAll({
      attributes: ['idTienda', 'nombre']
    });
    res.json(tiendas);
  } catch (err) {
    console.error('Error al obtener nombres de tiendas:', err);
    res.status(500).json({ error: 'Error al obtener nombres de tiendas' });
  }
};

// 2. Obtener valoración promedio de cada tienda
exports.obtenerValoracionesTiendas = async (req, res) => {
  try {
    const tiendas = await Tienda.findAll({
      attributes: ['idTienda', 'nombre', 'valoracion']
    });
    res.json(tiendas);
  } catch (err) {
    console.error('Error al obtener valoraciones de tiendas:', err);
    res.status(500).json({ error: 'Error al obtener valoraciones de tiendas' });
  }
};

// 3. Obtener resumen: nombre, valoración e imagen de cada tienda
exports.obtenerResumenTiendas = async (req, res) => {
  try {
    const tiendas = await Tienda.findAll({
      attributes: ['nombre', 'valoracion', 'imagen']
    });
    res.json(tiendas);
  } catch (err) {
    console.error('Error al obtener resumen de tiendas:', err);
    res.status(500).json({ error: 'Error al obtener resumen de tiendas' });
  }
};
