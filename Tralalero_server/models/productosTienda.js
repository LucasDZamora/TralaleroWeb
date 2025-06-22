module.exports = (sequelize, DataTypes) => {
  const ProductosTienda = sequelize.define('ProductosTienda', {
    idProducto: { type: DataTypes.INTEGER, primaryKey: true },
    idTienda: { type: DataTypes.INTEGER, primaryKey: true },
    fecha: DataTypes.DATEONLY,
    precio: DataTypes.DECIMAL(10, 2),
    oferta: DataTypes.BOOLEAN
  }, {
    tableName: 'productostienda',
    timestamps: false
  });

  ProductosTienda.associate = models => {
    ProductosTienda.belongsTo(models.Producto, { foreignKey: 'idProducto' , as: 'producto' });
    ProductosTienda.belongsTo(models.Tienda, { foreignKey: 'idTienda' });
  };

  return ProductosTienda;
};
