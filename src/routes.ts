const express = require('express');
var router = express.Router();
const userController = require('./controller/userController.ts');

router.get('/users', userController.getUsers);
router.post('/user', userController.addUser);

module.exports = router;