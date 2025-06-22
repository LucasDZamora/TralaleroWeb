module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    idUsuario: { type: DataTypes.INTEGER, primaryKey: true },
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    Comuna: DataTypes.STRING,
    Region: DataTypes.STRING,
    rut: DataTypes.STRING,
    esAdmin: DataTypes.BOOLEAN
  }, {
    tableName: 'usuarios',
    timestamps: false
  });

  Usuario.associate = models => {
    Usuario.hasMany(models.ReseñaProducto, { foreignKey: 'idUsuario' });
    Usuario.hasMany(models.ReseñaTienda, { foreignKey: 'idUsuario' });
  };

  return Usuario;
};
