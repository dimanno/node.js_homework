const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getUsers);
router.post('/', userController.postUsers);
router.put('/', userController.putUsers);
router.delete('/', userController.deleteUsers);

module.exports = router;