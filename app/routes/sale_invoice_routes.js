let express = require('express');
let salesInvoiceController = require('../controllers/sale_invoice');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/salesInvoice/getAllSaleInvoices',salesInvoiceController.getAllSalesInvoice);//funciona.
router.get('/salesInvoice/getSaleInvoice/:invoiceNumber',salesInvoiceController.getASaleInvoice);//funciona.
router.post('/salesInvoice/saveSaleInvoice',salesInvoiceController.saveSaleInvoice);//funciona.
router.get('/salesInvoice/getSalesInvoiceByState/:state',salesInvoiceController.getSalesInvoiceByState);
router.get('/salesInvoice/deleteSaleInvoice/:invoiceNumber',salesInvoiceController.deleteSaleInvoice);
router.get('/salesInvoice/getAllSalesInvoiceByPagination/:page_request/:limit',salesInvoiceController.getSalesInvoiceByPagination);
router.get('/salesInvoice/getAllSalesInvoiceByDateRangeAndPagination/:date_from/:date_to/:page_request/:limit',salesInvoiceController.getAllSalesInvoiceByDateRangeAndPagination);
router.get('/salesInvoice/getAllSalesInvoiceByEmisorAndPagination/:emisor_id/:page_request/:limit',salesInvoiceController.getAllSalesInvoiceByEmisorAndPagination);
router.get('/salesInvoice/getAllSalesInvoiceByEmisorDateRangeAndPagination/:emisor_id/:date_from/:date_to/:page_request/:limit',salesInvoiceController.getAllSalesInvoiceByEmisorDateRangeAndPagination);
router.get('/salesInvoice/getSalesInvoiceByStateAndPaginate/:state/:page_request/:limit',salesInvoiceController.getSalesInvoiceByStateAndPaginate);
router.get('/salesInvoice/getSalesInvoiceByStateDateRangeAndPaginate/:state/:date_from/:date_to/:page_request/:limit',salesInvoiceController.getSalesInvoiceByStateDateRangeAndPaginate);
router.get('/salesInvoice/updateSaleInvoiceState/:num_factura/:state',salesInvoiceController.updateSaleInvoiceState);
router.get('/salesInvoice/getSalesInvoiceByClientDateRangeAndPaginate/:clientId/:date_from/:date_to/:page_request/:limit',salesInvoiceController.getSalesInvoiceByClientDateRangeAndPaginate);

module.exports = router;