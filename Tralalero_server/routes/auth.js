const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validateRegister, validateLogin } = require('../middlewares/validationMiddleware');
const { loginRateLimiter } = require('../middlewares/rateLimiter');

router.post('/register', validateRegister, authController.register);
router.post('/login', loginRateLimiter, validateLogin, authController.login);

module.exports = router;
