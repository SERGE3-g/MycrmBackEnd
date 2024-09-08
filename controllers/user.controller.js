/*
const User = require('../models/user.model');

exports.createUser = async (req, res) => {
    try {
        const { id, name, email, password, role } = req.body;
        const user = await User.create({ id, name, email, password, role });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Errore nella creazione dell\'utente' });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero degli utenti' });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Utente non trovato' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero dell\'utente' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { id, name, email, password, role } = req.body;
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Utente non trovato' });
        }
        await user.update({ id, name, email, password, role });
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: 'Errore nell\'aggiornamento dell\'utente' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Utente non trovato' });
        }
        await user.destroy();
        res.json({ message: 'Utente eliminato con successo' });
    } catch (error) {
        res.status(500).json({ error: 'Errore nell\'eliminazione dell\'utente' });
    }
};

// In questo snippet di codice, definiamo le funzioni per gestire le richieste relative agli utenti. Le funzioni createUser, getUsers, getUserById, updateUser e deleteUser vengono utilizzate per creare, ottenere, ottenere per ID, aggiornare e eliminare un utente rispettivamente.
// Le funzioni utilizzano il modello User per interagire con il database e gestire le operazioni CRUD sugli utenti.
 */

const User = require('../models/user.model');

// Creare un nuovo utente
exports.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.create({ username, email, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Errore nella creazione dell\'utente' });
    }
};

// Ottenere tutti gli utenti con paginazione
exports.getUsers = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const offset = (page - 1) * limit;

        const { count, rows } = await User.findAndCountAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
        });

        res.json({
            totalItems: count,
            totalPages: Math.ceil(count / limit),
            currentPage: parseInt(page),
            users: rows,
        });
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero degli utenti' });
    }
};

// Ottenere un singolo utente
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Utente non trovato' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero dell\'utente' });
    }
};

// Aggiornare un utente
exports.updateUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Utente non trovato' });
        }
        await user.update({ username, email, password });
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: 'Errore nell\'aggiornamento dell\'utente' });
    }
};

// Eliminare un utente
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Utente non trovato' });
        }
        await user.destroy();
        res.json({ message: 'Utente eliminato con successo' });
    } catch (error) {
        res.status(500).json({ error: 'Errore nell\'eliminazione dell\'utente' });
    }
};

