const City = require('../models/city.model');

exports.createCity = async (req, res) => {
    try {
        const city = await City.create(req.body);
        res.status(201).json(city);
    } catch (error) {
        res.status(400).json({ error: 'Errore nella creazione della città' });
    }
};

exports.getCities = async (req, res) => {
    try {
        const cities = await City.findAll();
        res.json(cities);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero delle città' });
    }
};

exports.getCityById = async (req, res) => {
    try {
        const city = await City.findByPk(req.params.id);
        if (!city) {
            return res.status(404).json({ error: 'Città non trovata' });
        }
        res.json(city);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero della città' });
    }
};

exports.updateCity = async (req, res) => {
    try {
        const city = await City.findByPk(req.params.id);
        if (!city) {
            return res.status(404).json({ error: 'Città non trovata' });
        }
        await city.update(req.body);
        res.json(city);
    } catch (error) {
        res.status(400).json({ error: 'Errore nell\'aggiornamento della città' });
    }
};

exports.deleteCity = async (req, res) => {
    try {
        const city = await City.findByPk(req.params.id);
        if (!city) {
            return res.status(404).json({ error: 'Città non trovata' });
        }
        await city.destroy();
        res.json({ message: 'Città eliminata con successo' });
    } catch (error) {
        res.status(500).json({ error: 'Errore nell\'eliminazione della città' });
    }
};
