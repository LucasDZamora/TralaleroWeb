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

exports.agregarResenaProducto = (req, res) => {
  const { idProducto, idUsuario, resena, valoracion } = req.body;

  if (!idProducto || !idUsuario || !resena || valoracion === undefined) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  const sql = `
    INSERT INTO reseñaproducto (idProducto, idUsuario, reseña, valoración)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [idProducto, idUsuario, resena, valoracion], (err, result) => {
    if (err) {
      console.error('Error al insertar la reseña:', err);
      return res.status(500).json({ error: 'Error al guardar la reseña' });
    }

    res.status(201).json({ message: 'Reseña agregada exitosamente', idResena: result.insertId });
  });
};

exports.buscarProductoHome = (req, res) => {
  const query = `
    SELECT  nombre, imagen
    FROM producto
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener productos:', err);
      return res.status(500).json({ error: 'Error al obtener productos' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'No se encontraron productos' });
    }

    res.json(results);
  });
};

exports.obtenerProductoPorId = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Falta el parámetro id' });
  }

  const sql = `
    SELECT
      p.idProducto,
      p.nombre,
      p.descripción AS descripcion,         -- CORREGIDO: 'descripción' en DB, alias 'descripcion'
      p.imagen,
      p.categoria,
      p.valoracion AS valoracionProducto,   -- CORREGIDO: 'valoracion' en DB, alias 'valoracionProducto'
      p.link,
      best_price_info.precio AS precioMasBarato,
      best_price_info.oferta AS ofertaMasBarato,
      t_best.nombre AS nombreTiendaMasBarata,
      t_best.idTienda AS idTiendaMasBarata,
      t_best.linkPagina AS linkPaginaTiendaMasBarata, -- CORREGIDO: 'linkPagina' en DB, alias 'linkPaginaTiendaMasBarata'
      best_price_info.fecha AS fechaPrecioMasBarato
    FROM
      producto p
    LEFT JOIN (
      -- Subconsulta para encontrar el precio más bajo de las fechas más recientes por tienda para este producto
      SELECT
        pt_recent.idProducto,
        pt_recent.idTienda,
        pt_recent.precio,
        pt_recent.oferta,
        pt_recent.fecha
      FROM
        ProductosTienda pt_recent
      INNER JOIN (
        -- Encuentra la última fecha para CADA combinación (idProducto, idTienda)
        SELECT
          idProducto,
          idTienda,
          MAX(fecha) AS max_fecha
        FROM
          ProductosTienda
        WHERE idProducto = ? -- Filtro inicial para optimizar
        GROUP BY
          idProducto, idTienda
      ) AS latest_dates
      ON pt_recent.idProducto = latest_dates.idProducto
      AND pt_recent.idTienda = latest_dates.idTienda
      AND pt_recent.fecha = latest_dates.max_fecha
      WHERE
        pt_recent.idProducto = ? -- Aseguramos que solo sea para el producto actual
      ORDER BY
        pt_recent.precio ASC, pt_recent.oferta DESC
      LIMIT 1 -- Selecciona el precio más bajo de entre los más recientes
    ) AS best_price_info ON p.idProducto = best_price_info.idProducto
    LEFT JOIN
      tienda t_best ON best_price_info.idTienda = t_best.idTienda
    WHERE
      p.idProducto = ?;
  `;

  db.query(sql, [id, id, id], (err, results) => { // Pasar el 'id' tres veces para los tres placeholders '?'
    if (err) {
      console.error('Error en obtenerProductoPorId:', err); // Log el error para depurar
      return res.status(500).json({ error: 'Error al obtener producto' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json(results[0]); // Devolvemos el primer (y único) resultado
  });
};



exports.obtenerHistorialPrecios = (req, res) => {
  const { id } = req.params;     // idProducto
  const { tiendaId } = req.query; // idTienda

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

exports.obtenerTiendasYPreciosProducto = (req, res) => {
  const { id } = req.params; // idProducto

  if (!id) {
    return res.status(400).json({ error: 'Falta el parámetro idProducto' });
  }

  const sql = `
    SELECT
      t.idTienda,
      t.nombre AS nombreTienda,
      t.linkPagina AS linkTienda, -- CAMBIO: 'linkPagina' en DB, alias 'linkTienda'
      pt.precio,
      pt.oferta,
      pt.fecha AS fechaPrecio
    FROM
      ProductosTienda pt
    JOIN
      Tienda t ON pt.idTienda = t.idTienda
    WHERE
      pt.idProducto = ?
      AND pt.fecha = (SELECT MAX(fecha) FROM ProductosTienda WHERE idProducto = pt.idProducto AND idTienda = pt.idTienda)
    ORDER BY
      t.nombre ASC;
  `;

  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error('Error al obtener tiendas y precios del producto:', err); // Aquí se imprimirá el error exacto
      return res.status(500).json({ error: 'Error al obtener tiendas y precios del producto' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'No se encontraron precios para este producto en ninguna tienda.' });
    }

    res.json(results);
  });
};

exports.obtenerResenasProducto = (req, res) => {
  const { id } = req.params; // idProducto

  if (!id) {
    return res.status(400).json({ error: 'Falta el parámetro idProducto' });
  }

  const sql = `
    SELECT
      rp.idReseña,
      rp.reseña AS comentario, -- ¡ASEGÚRATE DE QUE ESTE ALIAS ESTÉ AQUÍ!
      rp.valoración AS valoracionResena,
      u.idUsuario,
      u.nombre AS nombreUsuario,
      u.correo AS correoUsuario
    FROM
      reseñaproducto rp
    JOIN
      usuarios u ON rp.idUsuario = u.idUsuario
    WHERE
      rp.idProducto = ?
    ORDER BY
      rp.idReseña DESC;
  `;

  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error('Error al obtener reseñas del producto:', err);
      return res.status(500).json({ error: 'Error al obtener reseñas del producto' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'No se encontraron reseñas para este producto.' });
    }

    res.json(results);
  });
};
