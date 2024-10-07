const express = require('express')
const router = express.Router()
const userController = require('../../Controllers/userController')


router.route('/create').post(
    userController.createUser,
);

router.route('/userList').get(
    userController.getUsers,
);

router.route('/update').put(
    userController.updateUser,
);

router.route('/delete').delete(
    userController.deleteUser,
);

module.exports = router;