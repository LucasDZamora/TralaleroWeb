const { body, validationResult } = require('express-validator');

// Función para validar un RUT chileno básico
function esRutValido(rut) {
  return /^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rut);
}

exports.validateRegister = [
  body('nombre')
    .trim().escape()
    .notEmpty().withMessage('El nombre es obligatorio'),

  body('correo')
    .isEmail().withMessage('Correo inválido')
    .normalizeEmail(),

  body('contrasena')
    .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),

  body('comuna')
    .trim().escape()
    .notEmpty().withMessage('La comuna es obligatoria'),

  body('region')
    .trim().escape()
    .notEmpty().withMessage('La región es obligatoria'),

  body('rut')
    .trim().escape()
    .custom(rut => {
      if (!esRutValido(rut)) throw new Error('RUT inválido');
      return true;
    }),

  (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }
    next();
  }
];

exports.validateLogin = [
  body('correo')
    .isEmail().withMessage('Correo inválido')
    .normalizeEmail(),

  body('contrasena')
    .notEmpty().withMessage('La contraseña es requerida'),

  (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }
    next();
  }
];
