let express = require('express');
let router = express.Router();
let authMiddleware = require('../middleware/auth');
 
//APP ENDPOINTS
router.get('/',(req,res)=>{
    res.status(200).send("REST API Jehová Jireth !");
});

module.exports = router;