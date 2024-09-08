
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

router.post('/contacts',contactController.createContact);
router.get('/contacts/',contactController.getContacts);
router.get('/contacts/:id', contactController.getContactById);
router.put('/contacts/:id', contactController.updateContact);
router.delete('/contacts/:id', contactController.deleteContact);

module.exports = router;
// routes/contact.routes.js