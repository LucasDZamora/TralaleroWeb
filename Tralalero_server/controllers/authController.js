const { Usuario } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { nombre, correo, contrasena, comuna, region, rut } = req.body;

  try {
    const existente = await Usuario.findOne({ where: { correo } });

    if (existente) {
      return res.status(400).json({ error: 'El correo ya está registrado' });
    }

    const hash = bcrypt.hashSync(contrasena, 10);

    await Usuario.create({
      nombre,
      correo,
      contraseña: hash,
      Comuna: comuna,
      Region: region,
      rut,
      esAdmin: false
    });

    res.json({ message: 'Usuario registrado con éxito' });
  } catch (err) {
    console.error('Error al registrar usuario:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.login = async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
    const user = await Usuario.findOne({ where: { correo } });

    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const isMatch = bcrypt.compareSync(contrasena, user.contraseña);
    if (!isMatch) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign(
      { id: user.idUsuario, correo: user.correo, esAdmin: user.esAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({
      token,
      user: {
        id: user.idUsuario,
        nombre: user.nombre,
        correo: user.correo,
        esAdmin: user.esAdmin
      }
    });
  } catch (err) {
    console.error('Error al hacer login:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
