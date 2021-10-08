const router = require('express').Router();

const userController = require('../controllers/user.controller');
const userMiddleware = require('../middleware/user.middleware');

router.get('/', userController.getUsers);
router.post('/', userMiddleware.createUserMiddleware, userController.postUsers);

router.get('/:user_id', userController.getUserById);
router.put('/:user_id', userController.updateUsers);
router.delete('/:user_id', userController.deleteUser);

module.exports = router;
