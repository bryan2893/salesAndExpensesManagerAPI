let express = require('express');
let foodController = require('../controllers/food');
let router = express.Router();

router.get('/foods/getAllFoods',foodController.getAllFoods);
router.get('/foods/getFood/:foodId',foodController.getAFood);

module.exports = router;