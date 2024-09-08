const Task = require('../models/task.model');

exports.createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: 'Errore nella creazione del task' });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero dei task' });
    }
};

exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task non trovato' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero del task' });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task non trovato' });
        }
        await task.update(req.body);
        res.json(task);
    } catch (error) {
        res.status(400).json({ error: 'Errore nell\'aggiornamento del task' });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'Task non trovato' });
        }
        await task.destroy();
        res.json({ message: 'Task eliminato con successo' });
    } catch (error) {
        res.status(500).json({ error: 'Errore nell\'eliminazione del task' });
    }
};
