// The routes/opportunity.routes.js file defines the routes for the opportunities API.
//import express
//import the opportunityController
const express = require('express');
const router = express.Router();
const opportunityController = require('../controllers/opportunity.controller');

router.post('/opportunities', opportunityController.createOpportunity);
router.get('/opportunities', opportunityController.getOpportunities);
router.get('/opportunities/:id', opportunityController.getOpportunityById);
router.put('/opportunities/:id', opportunityController.updateOpportunity);
router.delete('/opportunities/:id', opportunityController.deleteOpportunity);

module.exports = router;
// The routes/opportunity.routes.js file is similar to the routes/lead.routes.js file,
// but it uses the opportunityController instead of the leadController.