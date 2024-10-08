
const express = require('express');
const router = express.Router();
const countryController = require('../controllers/country.controller');

router.post('/countries',countryController.createCountry);
router.get('/countries/',countryController.getCountries);
router.get('/countries/:id', countryController.getCountryById);
router.put('/countries/:id', countryController.updateCountry);
router.delete('/countries/:id', countryController.deleteCountry);

module.exports = router;
// routes/country.routes.js