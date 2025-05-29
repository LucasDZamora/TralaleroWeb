const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.register = (req, res) => {
  const { nombre, correo, contraseña, comuna, region, rut } = req.body;

  if (!nombre || !correo || !contraseña || !comuna || !region || !rut) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  const hash = bcrypt.hashSync(contraseña, 10);

  db.query(
    'INSERT INTO usuarios (nombre, correo, contraseña, comuna, region, rut, esAdmin) VALUES (?, ?, ?, ?, ?, ?, 0)',
    [nombre, correo, hash, comuna, region, rut],
    (err, results) => {
      if (err) {
        
        console.error('Error al registrar usuario:', err, 'Datos:', { nombre, correo, comuna, region, rut });
        return res.status(500).json({ error: 'Error al registrar usuario' });
      }

      res.json({ message: 'Usuario registrado con éxito' });
    }
  );
};

exports.login = (req, res) => {
  const { correo, contraseña } = req.body;

  db.query('SELECT * FROM usuarios WHERE correo = ?', [correo], (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const user = results[0];

    const isMatch = bcrypt.compareSync(contraseña, user.contraseña);
    if (!isMatch) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id: user.idUsuario, correo: user.correo }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.json({ token, user: { id: user.idUsuario, nombre: user.nombre, correo: user.correo } });
  });
};