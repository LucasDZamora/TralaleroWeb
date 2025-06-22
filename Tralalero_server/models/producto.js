module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define('Producto', {
    idProducto: { type: DataTypes.INTEGER, primaryKey: true },
    nombre: DataTypes.STRING,
    categoria: DataTypes.STRING,
    link: DataTypes.STRING,
    descripción: DataTypes.TEXT,
    imagen: DataTypes.STRING,
    valoracion: DataTypes.INTEGER
  }, {
    tableName: 'producto',
    timestamps: false
  });

  Producto.associate = models => {
    Producto.hasMany(models.ProductosTienda, { foreignKey: 'idProducto',as: 'productosTienda' });
    Producto.hasMany(models.ReseñaProducto, { foreignKey: 'idProducto' });
  };

  return Producto;
};
