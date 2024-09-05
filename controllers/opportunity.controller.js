// Descrizione: si occupa di gestire le richieste relative alle opportunità.
// Un'opportunità è un'occasione di business che può essere creata, visualizzata, aggiornata ed eliminata.


const Opportunity = require('../models/opportunity.model');
const Client = require('../models/client.model');

// Creare un'Opportunità
exports.createOpportunity = async (req, res) => {
    try {
        const { title, description, value, status, clientId } = req.body;
        const opportunity = await Opportunity.create({ title, description, value, status, clientId });
        res.status(201).json(opportunity);
    } catch (error) {
        res.status(400).json({ error: 'Errore nella creazione dell\'opportunità' });
    }
};

// Ottenere tutte le Opportunità
exports.getOpportunities = async (req, res) => {
    try {
        const opportunities = await Opportunity.findAll({ include: Client });
        res.json(opportunities);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero delle opportunità' });
    }
};

// Ottenere un'Opportunità specifica
exports.getOpportunityById = async (req, res) => {
    try {
        const opportunity = await Opportunity.findByPk(req.params.id, { include: Client });
        if (!opportunity) {
            return res.status(404).json({ error: 'Opportunità non trovata' });
        }
        res.json(opportunity);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero dell\'opportunità' });
    }
};

// Aggiornare un'Opportunità
exports.updateOpportunity = async (req, res) => {
    try {
        const { title, description, value, status } = req.body;
        const opportunity = await Opportunity.findByPk(req.params.id);
        if (!opportunity) {
            return res.status(404).json({ error: 'Opportunità non trovata' });
        }
        await opportunity.update({ title, description, value, status });
        res.json(opportunity);
    } catch (error) {
        res.status(400).json({ error: 'Errore nell\'aggiornamento dell\'opportunità' });
    }
};

// Eliminare un'Opportunità
exports.deleteOpportunity = async (req, res) => {
    try {
        const opportunity = await Opportunity.findByPk(req.params.id);
        if (!opportunity) {
            return res.status(404).json({ error: 'Opportunità non trovata' });
        }
        await opportunity.destroy();
        res.json({ message: 'Opportunità eliminata con successo' });
    } catch (error) {
        res.status(500).json({ error: 'Errore nell\'eliminazione dell\'opportunità' });
    }
};
