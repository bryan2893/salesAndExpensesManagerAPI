let express = require('express');
let foodController = require('../controllers/food');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

router.get('/foods/getAllFoods',authMiddleware.ensureAuthenticate,foodController.getAllFoods);
router.get('/foods/getFood/:foodId',authMiddleware.ensureAuthenticate,foodController.getAFood);
router.post('/foods/saveFood',authMiddleware.ensureAuthenticate,foodController.saveFood);
router.get('/foods/deleteFood/:foodId',authMiddleware.ensureAuthenticate,foodController.deleteFood);
router.post('/foods/updateFood',authMiddleware.ensureAuthenticate,foodController.updateFood);

module.exports = router;