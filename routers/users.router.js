const router = require('express').Router();
const userController = require('../controllers/user.controller');
const userMiddleware = require('../middleware/user.middleware');

router.get('/', userController.getUsers);
router.post('/', userMiddleware.createUserMiddleware, userController.postUsers);

module.exports = router;
