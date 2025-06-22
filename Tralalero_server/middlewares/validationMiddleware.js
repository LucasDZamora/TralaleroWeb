const { body, validationResult } = require('express-validator');

exports.validateRegister = [
  body('nombre').trim().escape().notEmpty().withMessage('Nombre requerido'),
  body('correo').isEmail().normalizeEmail().withMessage('Correo inválido'),
  body('contrasena').isLength({ min: 6 }).withMessage('Contraseña debe tener al menos 6 caracteres'),
  body('comuna').trim().escape().notEmpty(),
  body('region').trim().escape().notEmpty(),
  body('rut').trim().escape().notEmpty(),
  (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }
    next();
  }
];

exports.validateLogin = [
  body('correo').isEmail().normalizeEmail(),
  body('contrasena').notEmpty().withMessage('La contraseña es requerida'),
  (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }
    next();
  }
];
