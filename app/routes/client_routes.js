let express = require('express');
let clientController = require('../controllers/client');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

router.get('/clients/getAllClients',authMiddleware.ensureAuthenticate,clientController.getAllClients);
router.get('/clients/getClientByIdentifier/:clientId',authMiddleware.ensureAuthenticate,clientController.getClientByIdentifier);
router.post('/clients/saveClient',authMiddleware.ensureAuthenticate,clientController.saveClient);
router.get('/clients/deleteClient/:clientId',authMiddleware.ensureAuthenticate,clientController.deleteClient);
router.post('/clients/updateClient',authMiddleware.ensureAuthenticate,clientController.updateClient);

module.exports = router;