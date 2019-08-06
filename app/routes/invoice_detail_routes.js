let express = require('express');
let invoiceDetailController = require('../controllers/invoice_detail');
let router = express.Router();

router.get('/invoiceDetail/getInvoiceDetails/:num_factura',invoiceDetailController.getInvoiceDetails);

module.exports = router;