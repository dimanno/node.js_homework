const router = require('express').Router();
const userMiddleware = require('../middleware/user.middleware');
const userController = require('../controllers/user.controller');

router.post('/login', userMiddleware.loginUserMiddleware, userController.loginUser);
