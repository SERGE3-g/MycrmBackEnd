// routes/lead.routes.js
const express = require('express');
const router = express.Router();
const leadController = require('../controllers/lead.controller');

router.post('/leads', leadController.createLead);
router.get('/leads', leadController.getLeads);
router.get('/leads/:id', leadController.getLeadById);
router.put('/leads/:id', leadController.updateLead);
router.delete('/leads/:id', leadController.deleteLead);

module.exports = router;
