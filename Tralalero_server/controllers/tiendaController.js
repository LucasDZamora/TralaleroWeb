const { Tienda } = require('../models');

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
