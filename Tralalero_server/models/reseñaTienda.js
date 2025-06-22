module.exports = (sequelize, DataTypes) => {
  const ReseñaTienda = sequelize.define('ReseñaTienda', {
    idReseña: { type: DataTypes.INTEGER, primaryKey: true },
    idTienda: DataTypes.INTEGER,
    idUsuario: DataTypes.INTEGER,
    reseña: DataTypes.TEXT,
    valoración: DataTypes.FLOAT
  }, {
    tableName: 'reseñatienda',
    timestamps: false
  });

  ReseñaTienda.associate = models => {
    ReseñaTienda.belongsTo(models.Tienda, { foreignKey: 'idTienda' });
    ReseñaTienda.belongsTo(models.Usuario, { foreignKey: 'idUsuario' });
  };

  return ReseñaTienda;
};
