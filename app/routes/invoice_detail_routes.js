let express = require('express');
let invoiceDetailController = require('../controllers/invoice_detail');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

router.get('/invoiceDetail/getInvoiceDetails/:num_factura',invoiceDetailController.getInvoiceDetails);

module.exports = router;