// Descrizione: Controller per la gestione dei Lead (potenziali clienti)

const Lead = require('../models/lead.model');

// Creare un Lead
exports.createLead = async (req, res) => {
    try {
        const { name, email, phone, status } = req.body;
        const lead = await Lead.create({ name, email, phone, status });
        res.status(201).json(lead);
    } catch (error) {
        res.status(400).json({ error: 'Errore nella creazione del lead' });
    }
};

// Ottenere tutti i Lead
exports.getLeads = async (req, res) => {
    try {
        const leads = await Lead.findAll();
        res.json(leads);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero dei lead' });
    }
};

// Ottenere un Lead specifico
exports.getLeadById = async (req, res) => {
    try {
        const lead = await Lead.findByPk(req.params.id);
        if (!lead) {
            return res.status(404).json({ error: 'Lead non trovato' });
        }
        res.json(lead);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero del lead' });
    }
};

// Aggiornare un Lead
exports.updateLead = async (req, res) => {
    try {
        const { name, email, phone, status } = req.body;
        const lead = await Lead.findByPk(req.params.id);
        if (!lead) {
            return res.status(404).json({ error: 'Lead non trovato' });
        }
        await lead.update({ name, email, phone, status });
        res.json(lead);
    } catch (error) {
        res.status(400).json({ error: 'Errore nell\'aggiornamento del lead' });
    }
};

// Eliminare un Lead
exports.deleteLead = async (req, res) => {
    try {
        const lead = await Lead.findByPk(req.params.id);
        if (!lead) {
            return res.status(404).json({ error: 'Lead non trovato' });
        }
        await lead.destroy();
        res.json({ message: 'Lead eliminato con successo' });
    } catch (error) {
        res.status(500).json({ error: 'Errore nell\'eliminazione del lead' });
    }
};
