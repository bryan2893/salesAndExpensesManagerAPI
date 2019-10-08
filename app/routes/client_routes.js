let express = require('express');
let clientController = require('../controllers/client');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/clients/getAllClients',clientController.getAllClients);//funciona.
router.get('/clients/getClientByIdentifier/:clientId',clientController.getClientByIdentifier);//funciona.
router.post('/clients/saveClient',clientController.saveClient);//funciona
router.get('/clients/deleteClient/:clientId',clientController.deleteClient);//funciona
router.post('/clients/updateClient',clientController.updateClient);//funciona.

module.exports = router;