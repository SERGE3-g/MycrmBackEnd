const Country = require('../models/country.model');

exports.createCountry = async (req, res) => {
    try {
        const country = await Country.create(req.body);
        res.status(201).json(country);
    } catch (error) {
        res.status(400).json({ error: 'Errore nella creazione del paese' });
    }
};

exports.getCountries = async (req, res) => {
    try {
        const countries = await Country.findAll();
        res.json(countries);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero dei paesi' });
    }
};

exports.getCountryById = async (req, res) => {
    try {
        const country = await Country.findByPk(req.params.id);
        if (!country) {
            return res.status(404).json({ error: 'Paese non trovato' });
        }
        res.json(country);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero del paese' });
    }
};

exports.updateCountry = async (req, res) => {
    try {
        const country = await Country.findByPk(req.params.id);
        if (!country) {
            return res.status(404).json({ error: 'Paese non trovato' });
        }
        await country.update(req.body);
        res.json(country);
    } catch (error) {
        res.status(400).json({ error: 'Errore nell\'aggiornamento del paese' });
    }
};

exports.deleteCountry = async (req, res) => {
    try {
        const country = await Country.findByPk(req.params.id);
        if (!country) {
            return res.status(404).json({ error: 'Paese non trovato' });
        }
        await country.destroy();
        res.json({ message: 'Paese eliminato con successo' });
    } catch (error) {
        res.status(500).json({ error: 'Errore nell\'eliminazione del paese' });
    }
};
