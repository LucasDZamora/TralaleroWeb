const db = require('../db');

exports.buscarProductos = (req, res) => {
  const { nombre } = req.query;

  if (!nombre) {
    return res.status(400).json({ error: 'Falta el parámetro nombre' });
  }

  db.query(
    'SELECT * FROM producto WHERE nombre LIKE ?',
    [`%${nombre}%`],
    (err, results) => {
      if (err) {
        console.error('Error al buscar productos:', err);
        return res.status(500).json({ error: 'Error al buscar productos' });
      }

      if (results.length === 0) {
        return res.status(404).json({ message: 'No se encontraron productos que coincidan con la búsqueda' });
      }

      res.json(results);
    }
  );
};


exports.obtenerProductoPorId = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Falta el parámetro id' });
  }

  db.query(
    'SELECT * FROM producto WHERE idProducto = ?',
    [id],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error al obtener producto' });
      }

      if (results.length === 0) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }

      res.json(results[0]);
    }
  );
}
