const db = require('../db');

// 1. Obtener nombre de todas las tiendas
exports.obtenerNombresTiendas = (req, res) => {
  db.query('SELECT idTienda, nombre FROM tienda', (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener nombres' });
    res.json(results);
  });
};

// 2. Obtener valoración promedio de cada tienda (desde columna valoracion)
exports.obtenerValoracionesTiendas = (req, res) => {
  db.query('SELECT idTienda, nombre, valoracion FROM tienda', (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener valoraciones' });
    res.json(results);
  });
};

// 3. Obtener nombre, valoración y cantidad de reseñas de cada tienda
exports.obtenerResumenTiendas = (req, res) => {
  const sql = `
    SELECT
      nombre,
      valoracion,
      imagen
    FROM tienda
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error al obtener tiendas:', err);
      return res.status(500).json({ error: 'Error al obtener tiendas' });
    }
    res.json(results);
  });
};

