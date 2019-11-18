let express = require('express');
let salesInvoiceController = require('../controllers/sale_invoice');
let router = express.Router();
let authMiddleware = require('../middleware/auth');

//authMiddleware.ensureAuthenticate

router.get('/salesInvoice/getAllSaleInvoices',salesInvoiceController.getAllSalesInvoice);//funciona.
router.get('/salesInvoice/getSaleInvoice/:invoiceNumber',salesInvoiceController.getASaleInvoice);//funciona.
router.post('/salesInvoice/saveSaleInvoice',salesInvoiceController.saveSaleInvoice);//funciona.
router.get('/salesInvoice/getSalesInvoiceByState/:state',salesInvoiceController.getSalesInvoiceByState);//funciona.
router.get('/salesInvoice/deleteSaleInvoice/:invoiceNumber',salesInvoiceController.deleteSaleInvoice);
router.get('/salesInvoice/count',salesInvoiceController.countInvoices);//funciona.
router.get('/salesInvoice/getAllSalesInvoiceByPagination/:page_request/:limit',salesInvoiceController.getSalesInvoiceByPagination);//checked
router.get('/salesInvoice/getAllSalesInvoiceByDateRangeAndPagination/:date_from/:date_to/:page_request/:limit',salesInvoiceController.getAllSalesInvoiceByDateRangeAndPagination);//checked
router.get('/salesInvoice/getAllSalesInvoiceByEmisorAndPagination/:emisor_id/:page_request/:limit',salesInvoiceController.getAllSalesInvoiceByEmisorAndPagination);//checked.
router.get('/salesInvoice/getAllSalesInvoiceByEmisorDateRangeAndPagination/:workerId/:date_from/:date_to/:page_request/:limit',salesInvoiceController.getAllSalesInvoiceByEmisorDateRangeAndPagination);//checked
router.get('/salesInvoice/getSalesInvoiceByStateAndPaginate/:state/:page_request/:limit',salesInvoiceController.getSalesInvoiceByStateAndPaginate);//checked
router.get('/salesInvoice/getSalesInvoiceByStateDateRangeAndPaginate/:state/:date_from/:date_to/:page_request/:limit',salesInvoiceController.getSalesInvoiceByStateDateRangeAndPaginate);//checked
router.get('/salesInvoice/updateSaleInvoiceState/:invoiceNumber/:newState',salesInvoiceController.updateSaleInvoiceState);//funciona
router.get('/salesInvoice/getSalesInvoiceByClientDateRangeAndPaginate/:clientId/:date_from/:date_to/:page_request/:limit',salesInvoiceController.getSalesInvoiceByClientDateRangeAndPaginate);//checked

module.exports = router;