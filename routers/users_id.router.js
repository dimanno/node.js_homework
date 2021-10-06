const router = require('express').Router();
const userController = require("../controllers/user.controller");

router.get('/:user_id', userController.getUserById);
router.delete('/:user_id', userController.deleteUser);
router.put('/:user_id', userController.updateUsers);

module.exports = router