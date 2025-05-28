const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect(err => {
  if (err) {
    console.error(' Error al conectar a MySQL:', err.message);
    process.exit(1); // Termina el proceso si no se conecta
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

module.exports = connection;
