module.exports = (sequelize, DataTypes) => {
  const ReseñaProducto = sequelize.define('ReseñaProducto', {
    idReseña: { type: DataTypes.INTEGER, primaryKey: true },
    idProducto: DataTypes.INTEGER,
    idUsuario: DataTypes.INTEGER,
    reseña: DataTypes.TEXT,
    valoración: DataTypes.INTEGER
  }, {
    tableName: 'reseñaproducto',
    timestamps: false
  });

  ReseñaProducto.associate = models => {
    ReseñaProducto.belongsTo(models.Producto, { foreignKey: 'idProducto' });
    ReseñaProducto.belongsTo(models.Usuario, { foreignKey: 'idUsuario' });
  };

  return ReseñaProducto;
};
