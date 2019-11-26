let express = require('express');
let clientController = require('../controllers/client');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/clients/getAllClients',clientController.getAllClients);//funciona.
router.get('/clients/getClientById/:clientId',clientController.getClientById);//funciona.
router.delete('/clients/deleteClient/:clientId',clientController.deleteClient);//funciona.
router.put('/clients/createClient',clientController.createClient);//funciona.
router.put('/clients/updateClient/:clientId',clientController.updateClient);//funciona.

module.exports = router;