let express = require('express');
let router = express.Router();
 
//APP ENDPOINTS
router.get('/',(req,res)=>{
    res.status(200).send("REST API Jehová Jireth !");
});

module.exports = router;