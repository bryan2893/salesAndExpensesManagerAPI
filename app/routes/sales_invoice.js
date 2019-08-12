let express = require('express');
let salesInvoiceController = require('../controllers/sales_invoice');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

router.get('/salesInvoice/getAllSaleInvoice',authMiddleware.ensureAuthenticate,salesInvoiceController.getAllSalesInvoice);
router.get('/salesInvoice/getSaleInvoice/:num_factura',authMiddleware.ensureAuthenticate,salesInvoiceController.getASaleInvoice);
router.post('/salesInvoice/saveSaleInvoice',authMiddleware.ensureAuthenticate,salesInvoiceController.saveSaleInvoice);
router.get('/salesInvoice/getSalesInvoiceByState/:state',authMiddleware.ensureAuthenticate,salesInvoiceController.getSalesInvoiceByState);
router.get('/salesInvoice/deleteSaleInvoice/:num_factura',authMiddleware.ensureAuthenticate,salesInvoiceController.deleteSaleInvoice);
router.get('/salesInvoice/getAllSalesInvoiceByPagination/:page_request/:limit',authMiddleware.ensureAuthenticate,salesInvoiceController.getSalesInvoiceByPagination);
router.get('/salesInvoice/getAllSalesInvoiceByDateRangeAndPagination/:date_from/:date_to/:page_request/:limit',authMiddleware.ensureAuthenticate,salesInvoiceController.getAllSalesInvoiceByDateRangeAndPagination);
router.get('/salesInvoice/getAllSalesInvoiceByEmisorAndPagination/:emisor_id/:page_request/:limit',authMiddleware.ensureAuthenticate,salesInvoiceController.getAllSalesInvoiceByEmisorAndPagination);
router.get('/salesInvoice/getAllSalesInvoiceByEmisorDateRangeAndPagination/:emisor_id/:date_from/:date_to/:page_request/:limit',authMiddleware.ensureAuthenticate,salesInvoiceController.getAllSalesInvoiceByEmisorDateRangeAndPagination);
router.get('/salesInvoice/getSalesInvoiceByStateAndPaginate/:state/:page_request/:limit',authMiddleware.ensureAuthenticate,salesInvoiceController.getSalesInvoiceByStateAndPaginate);
router.get('/salesInvoice/getSalesInvoiceByStateDateRangeAndPaginate/:state/:date_from/:date_to/:page_request/:limit',authMiddleware.ensureAuthenticate,salesInvoiceController.getSalesInvoiceByStateDateRangeAndPaginate);
router.get('/salesInvoice/updateSaleInvoiceState/:num_factura/:state',authMiddleware.ensureAuthenticate,salesInvoiceController.updateSaleInvoiceState);

module.exports = router;