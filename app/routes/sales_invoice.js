let express = require('express');
let salesInvoiceController = require('../controllers/sales_invoice');
let router = express.Router();

router.get('/salesInvoice/getAllSaleInvoice',salesInvoiceController.getAllSalesInvoice);
router.get('/salesInvoice/getSaleInvoice/:num_factura',salesInvoiceController.getASaleInvoice);
router.post('/salesInvoice/saveSaleInvoice',salesInvoiceController.saveSaleInvoice);
router.get('/salesInvoice/deleteSaleInvoice/:num_factura',salesInvoiceController.deleteSaleInvoice);

module.exports = router;