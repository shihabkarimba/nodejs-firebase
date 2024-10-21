const express = require('express')
const router = express.Router()
const messageController = require('../../Controllers/messageController')


router.route('/sendMessage').post(
    messageController.sendMessageById,
);


module.exports = router;