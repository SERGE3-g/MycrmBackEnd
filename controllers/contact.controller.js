const Contact = require('../models/contact.model');

exports.createContact = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        res.status(201).json(contact);
    } catch (error) {
        res.status(400).json({ error: 'Errore nella creazione del contatto' });
    }
};

exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.findAll();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero dei contatti' });
    }
};

exports.getContactById = async (req, res) => {
    try {
        const contact = await Contact.findByPk(req.params.id);
        if (!contact) {
            return res.status(404).json({ error: 'Contatto non trovato' });
        }
        res.json(contact);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero del contatto' });
    }
};

exports.updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByPk(req.params.id);
        if (!contact) {
            return res.status(404).json({ error: 'Contatto non trovato' });
        }
        await contact.update(req.body);
        res.json(contact);
    } catch (error) {
        res.status(400).json({ error: 'Errore nell\'aggiornamento del contatto' });
    }
};

exports.deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByPk(req.params.id);
        if (!contact) {
            return res.status(404).json({ error: 'Contatto non trovato' });
        }
        await contact.destroy();
        res.json({ message: 'Contatto eliminato con successo' });
    } catch (error) {
        res.status(500).json({ error: 'Errore nell\'eliminazione del contatto' });
    }
};
