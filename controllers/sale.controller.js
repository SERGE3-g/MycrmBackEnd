const Sale = require('../models/sale.model');

exports.createSale = async (req, res) => {
    try {
        const sale = await Sale.create(req.body);
        res.status(201).json(sale);
    } catch (error) {
        res.status(400).json({ error: 'Errore nella creazione della vendita' });
    }
};

exports.getSales = async (req, res) => {
    try {
        const sales = await Sale.findAll();
        res.json(sales);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero delle vendite' });
    }
};

exports.getSaleById = async (req, res) => {
    try {
        const sale = await Sale.findByPk(req.params.id);
        if (!sale) {
            return res.status(404).json({ error: 'Vendita non trovata' });
        }
        res.json(sale);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero della vendita' });
    }
};

exports.updateSale = async (req, res) => {
    try {
        const sale = await Sale.findByPk(req.params.id);
        if (!sale) {
            return res.status(404).json({ error: 'Vendita non trovata' });
        }
        await sale.update(req.body);
        res.json(sale);
    } catch (error) {
        res.status(400).json({ error: 'Errore nell\'aggiornamento della vendita' });
    }
};

exports.deleteSale = async (req, res) => {
    try {
        const sale = await Sale.findByPk(req.params.id);
        if (!sale) {
            return res.status(404).json({ error: 'Vendita non trovata' });
        }
        await sale.destroy();
        res.json({ message: 'Vendita eliminata con successo' });
    } catch (error) {
        res.status(500).json({ error: 'Errore nell\'eliminazione della vendita' });
    }
};
