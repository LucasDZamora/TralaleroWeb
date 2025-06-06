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


exports.obtenerHistorialPrecios = (req, res) => {
  const { id } = req.params;        // idProducto
  const { tiendaId } = req.query;   // idTienda

  if (!id || !tiendaId) {
    return res
      .status(400)
      .json({ error: 'Faltan parámetros: id (producto) y tiendaId son obligatorios' });
  }

  const sql = `
    SELECT 
      pt.fecha,
      pt.precio,
      pt.oferta,
      t.idTienda,
      t.nombre AS nombreTienda
    FROM ProductosTienda pt
    JOIN tienda t       ON t.idTienda = pt.idTienda
    WHERE pt.idProducto = ?
      AND pt.idTienda   = ?
    ORDER BY pt.fecha DESC;
  `;

  db.query(sql, [id, tiendaId], (err, rows) => {
    if (err) {
      console.error('Error al obtener historial:', err);
      return res.status(500).json({ error: 'Error al obtener historial de precios' });
    }
    if (rows.length === 0) {
      return res
        .status(404)
        .json({ message: 'No hay historial de precios para este producto y tienda' });
    }
    res.json(rows);
  });
};