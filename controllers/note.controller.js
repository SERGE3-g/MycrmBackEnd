const Note = require('../models/note.model');

exports.createNote = async (req, res) => {
    try {
        const note = await Note.create(req.body);
        res.status(201).json(note);
    } catch (error) {
        res.status(400).json({ error: 'Errore nella creazione della nota' });
    }
};

exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.findAll();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero delle note' });
    }
};

exports.getNoteById = async (req, res) => {
    try {
        const note = await Note.findByPk(req.params.id);
        if (!note) {
            return res.status(404).json({ error: 'Nota non trovata' });
        }
        res.json(note);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero della nota' });
    }
};

exports.updateNote = async (req, res) => {
    try {
        const note = await Note.findByPk(req.params.id);
        if (!note) {
            return res.status(404).json({ error: 'Nota non trovata' });
        }
        await note.update(req.body);
        res.json(note);
    } catch (error) {
        res.status(400).json({ error: 'Errore nell\'aggiornamento della nota' });
    }
};

exports.deleteNote = async (req, res) => {
    try {
        const note = await Note.findByPk(req.params.id);
        if (!note) {
            return res.status(404).json({ error: 'Nota non trovata' });
        }
        await note.destroy();
        res.json({ message: 'Nota eliminata con successo' });
    } catch (error) {
        res.status(500).json({ error: 'Errore nell\'eliminazione della nota' });
    }
};
