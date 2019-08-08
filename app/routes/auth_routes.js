let express = require('express');
let authController = require('../controllers/auth');
let router = express.Router();

router.post('/auth/getWorker',authController.auth);

module.exports = router;