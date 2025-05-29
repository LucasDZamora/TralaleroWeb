const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.register = (req, res) => {
  const { nombre, email, password, comuna, region, rut } = req.body;

  if (!nombre || !email || !password || !comuna || !region || !rut) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  const hash = bcrypt.hashSync(password, 10);

  db.query(
    'INSERT INTO usuarios (nombre, email, password, comuna, region, rut, esAdmin) VALUES (?, ?, ?, ?, ?, ?, 0)',
    [nombre, email, hash, comuna, region, rut],
    (err, results) => {
      if (err) {
        console.error('Error al registrar usuario:', err);
        return res.status(500).json({ error: 'Error al registrar usuario' });
      }

      res.json({ message: 'Usuario registrado con éxito' });
    }
  );
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const user = results[0];
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.json({ token, user: { id: user.id, nombre: user.nombre, email: user.email } });
  });
};
