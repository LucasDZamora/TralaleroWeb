const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

// Conexión con la base de datos
const sequelize = new Sequelize(
  process.env.DB_NAME,     // nombre base de datos
  process.env.DB_USER,     // usuario
  process.env.DB_PASSWORD, // contraseña
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: false // desactiva logs en consola
  }
);

// Importación de modelos
const Producto = require('./producto')(sequelize, DataTypes);
const Tienda = require('./tienda')(sequelize, DataTypes);
const Usuario = require('./usuario')(sequelize, DataTypes);
const ProductosTienda = require('./productosTienda')(sequelize, DataTypes);
const ReseñaProducto = require('./reseñaProducto')(sequelize, DataTypes);
const ReseñaTienda = require('./reseñaTienda')(sequelize, DataTypes);

// Asociaciones
const models = {
  Producto,
  Tienda,
  Usuario,
  ProductosTienda,
  ReseñaProducto,
  ReseñaTienda
};

Object.values(models).forEach(model => {
  if (model.associate) model.associate(models);
});

module.exports = {
  ...models,
  sequelize
};
