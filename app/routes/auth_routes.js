let express = require('express');
let authController = require('../controllers/auth');
let router = express.Router();

router.post('/auth/workerLogin',authController.auth);

module.exports = router;