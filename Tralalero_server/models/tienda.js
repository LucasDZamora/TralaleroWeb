module.exports = (sequelize, DataTypes) => {
  const Tienda = sequelize.define('Tienda', {
    idTienda: { type: DataTypes.INTEGER, primaryKey: true },
    nombre: DataTypes.STRING,
    imagen: DataTypes.STRING,
    valoracion: DataTypes.FLOAT,
    linkPagina: DataTypes.STRING
  }, {
    tableName: 'tienda',
    timestamps: false
  });

  Tienda.associate = models => {
    Tienda.hasMany(models.ProductosTienda, { foreignKey: 'idTienda' });
    Tienda.hasMany(models.ReseñaTienda, { foreignKey: 'idTienda' });
  };

  return Tienda;
};
