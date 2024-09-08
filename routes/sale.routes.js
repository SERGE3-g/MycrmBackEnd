// routes/lead.routes.js
const express = require('express');
const router = express.Router();
const saleController = require('../controllers/sale.controller');

router.post('/sales', saleController.createSale);
router.get('/sales', saleController.getSales);
router.get('/sales/:id', saleController.getSaleById);
router.put('/sales/:id', saleController.updateSale);
router.delete('/sales/:id', saleController.deleteSale);

module.exports = router;
