const { Producto, ProductosTienda, Tienda, Usuario, ReseñaProducto } = require('../models');
const { Op, Sequelize } = require('sequelize');

exports.buscarProductos = async (req, res) => {
  const { nombre } = req.query;

  if (!nombre) {
    return res.status(400).json({ error: 'Falta el parámetro nombre' });
  }

  try {
    const productos = await Producto.findAll({
      where: {
        nombre: { [Op.like]: `%${nombre}%` }
      }
    });

    if (productos.length === 0) {
      return res.status(404).json({ message: 'No se encontraron productos que coincidan con la búsqueda' });
    }

    res.json(productos);
  } catch (err) {
    console.error('Error al buscar productos:', err);
    res.status(500).json({ error: 'Error al buscar productos' });
  }
};

exports.agregarResenaProducto = async (req, res) => {
  const { idProducto, idUsuario, resena, valoracion } = req.body;

  if (!idProducto || !idUsuario || !resena || valoracion === undefined) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  try {
    const nuevaReseña = await ReseñaProducto.create({
      idProducto,
      idUsuario,
      reseña: resena,
      valoración: valoracion
    });

    res.status(201).json({
      message: 'Reseña agregada exitosamente',
      idResena: nuevaReseña.idReseña
    });
  } catch (err) {
    console.error('Error al insertar la reseña:', err);
    res.status(500).json({ error: 'Error al guardar la reseña' });
  }
};

exports.buscarProductoHome = async (req, res) => {
  try {
    const productos = await Producto.findAll({
      include: [
        {
          model: ProductosTienda,
          as: 'productosTienda', // este alias debe coincidir con el que definiste en hasMany
          separate: true,
          order: [['fecha', 'DESC']],
          limit: 1
        }
      ],
      limit: 5,
      order: [['idProducto', 'DESC']]
    });

    const resultado = productos.map(p => {
      const pt = (p.productosTienda && p.productosTienda.length > 0) ? p.productosTienda[0] : null;
      return {
        idProducto: p.idProducto,
        nombre: p.nombre,
        imagen: p.imagen,
        valoracion: p.valoracion,
        precio: pt?.precio || null
      };
    });

    res.json(resultado);
  } catch (err) {
    console.error('Error al obtener productos recientes:', err);
    res.status(500).json({ error: 'Error al obtener productos recientes' });
  }
};


exports.obtenerProductoPorId = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'Falta el parámetro id' });

  try {
    const producto = await Producto.findByPk(id);

    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });

    const precioMasBarato = await ProductosTienda.findOne({
      where: { idProducto: id },
      include: Tienda,
      order: [['fecha', 'DESC'], ['precio', 'ASC']]
    });

    res.json({
      idProducto: producto.idProducto,
      nombre: producto.nombre,
      descripcion: producto.descripción,
      imagen: producto.imagen,
      categoria: producto.categoria,
      valoracionProducto: producto.valoracion,
      link: producto.link,
      precioMasBarato: precioMasBarato?.precio || null,
      ofertaMasBarato: precioMasBarato?.oferta || null,
      nombreTiendaMasBarata: precioMasBarato?.Tienda?.nombre || null,
      idTiendaMasBarata: precioMasBarato?.Tienda?.idTienda || null,
      linkPaginaTiendaMasBarata: precioMasBarato?.Tienda?.linkPagina || null,
      fechaPrecioMasBarato: precioMasBarato?.fecha || null
    });
  } catch (err) {
    console.error('Error en obtenerProductoPorId:', err);
    res.status(500).json({ error: 'Error al obtener producto' });
  }
};

exports.obtenerHistorialPrecios = async (req, res) => {
  const { id } = req.params;
  const { tiendaId } = req.query;

  if (!id || !tiendaId) {
    return res.status(400).json({ error: 'Faltan parámetros: id y tiendaId' });
  }

  try {
    const historial = await ProductosTienda.findAll({
      where: {
        idProducto: id,
        idTienda: tiendaId
      },
      include: {
        model: Tienda,
        attributes: ['idTienda', 'nombre']
      },
      order: [['fecha', 'DESC']]
    });

    if (historial.length === 0) {
      return res.status(404).json({ message: 'No hay historial de precios' });
    }

    const resultado = historial.map(p => ({
      fecha: p.fecha,
      precio: p.precio,
      oferta: p.oferta,
      idTienda: p.Tienda.idTienda,
      nombreTienda: p.Tienda.nombre
    }));

    res.json(resultado);
  } catch (err) {
    console.error('Error al obtener historial:', err);
    res.status(500).json({ error: 'Error al obtener historial de precios' });
  }
};

exports.obtenerTiendasYPreciosProducto = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'Falta el parámetro idProducto' });

  try {
    const precios = await ProductosTienda.findAll({
      where: { idProducto: id },
      include: {
        model: Tienda,
        attributes: ['idTienda', 'nombre', 'linkPagina']
      },
      order: [[Sequelize.col('Tienda.nombre'), 'ASC']]
    });

    const resultado = precios.map(p => ({
      idTienda: p.Tienda.idTienda,
      nombreTienda: p.Tienda.nombre,
      linkTienda: p.Tienda.linkPagina,
      precio: p.precio,
      oferta: p.oferta,
      fechaPrecio: p.fecha
    }));

    res.json(resultado);
  } catch (err) {
    console.error('Error al obtener tiendas y precios:', err);
    res.status(500).json({ error: 'Error al obtener tiendas y precios' });
  }
};

exports.obtenerResenasProducto = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'Falta el parámetro idProducto' });

  try {
    const reseñas = await ReseñaProducto.findAll({
      where: { idProducto: id },
      include: {
        model: Usuario,
        attributes: ['idUsuario', 'nombre', 'correo']
      },
      order: [['idReseña', 'DESC']]
    });

    if (reseñas.length === 0) {
      return res.status(404).json({ message: 'No se encontraron reseñas para este producto.' });
    }

    const resultado = reseñas.map(r => ({
      idReseña: r.idReseña,
      comentario: r.reseña,
      valoracionResena: r.valoración,
      idUsuario: r.Usuario.idUsuario,
      nombreUsuario: r.Usuario.nombre,
      correoUsuario: r.Usuario.correo
    }));

    res.json(resultado);
  } catch (err) {
    console.error('Error al obtener reseñas:', err);
    res.status(500).json({ error: 'Error al obtener reseñas del producto' });
  }
};
