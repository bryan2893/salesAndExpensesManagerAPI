let express = require('express');
let salesInvoiceController = require('../controllers/sales_invoice');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

router.get('/salesInvoice/getAllSaleInvoice',salesInvoiceController.getAllSalesInvoice);
router.get('/salesInvoice/getSaleInvoice/:num_factura',salesInvoiceController.getASaleInvoice);
router.post('/salesInvoice/saveSaleInvoice',salesInvoiceController.saveSaleInvoice);
router.get('/salesInvoice/deleteSaleInvoice/:num_factura',salesInvoiceController.deleteSaleInvoice);
router.get('/salesInvoice/getAllSalesInvoiceByPagination/:page_request/:limit',salesInvoiceController.getSalesInvoiceByPagination);
router.get('/salesInvoice/getAllSalesInvoiceByDateRangeAndPagination/:date_from/:date_to/:page_request/:limit',salesInvoiceController.getAllSalesInvoiceByDateRangeAndPagination);
router.get('/salesInvoice/getAllSalesInvoiceByEmisorAndPagination/:emisor_id/:page_request/:limit',salesInvoiceController.getAllSalesInvoiceByEmisorAndPagination);
router.get('/salesInvoice/getAllSalesInvoiceByEmisorDateRangeAndPagination/:emisor_id/:date_from/:date_to/:page_request/:limit',salesInvoiceController.getAllSalesInvoiceByEmisorAndPagination);

module.exports = router;