const router= require('express').Router();

const userLoginMiddleware = require('../middleware/userLogin.middleware');
const userController = require('../controllers/user.controller');

router.post('/:login', userLoginMiddleware.loginUserMiddleware, userController.loginUser);

module.exports = router;
