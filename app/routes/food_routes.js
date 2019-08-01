let express = require('express');
let foodController = require('../controllers/food');
let router = express.Router();

router.get('/foods/getAllFoods',foodController.getAllFoods);
router.get('/foods/getFood/:foodId',foodController.getAFood);
router.post('/foods/saveFood',foodController.saveFood);
router.get('/foods/deleteFood/:foodId',foodController.deleteFood);
router.post('/foods/updateFood',foodController.updateFood);

module.exports = router;