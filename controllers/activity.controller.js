// Description: This file contains the logic for the activity routes.
const Activity = require('../models/activity.model');

exports.createActivity = async (req, res) => {
    try {
        const activity = await Activity.create(req.body);
        res.status(201).json(activity);
    } catch (error) {
        res.status(400).json({ error: 'Errore nella creazione dell\'attività' });
    }
};

exports.getActivities = async (req, res) => {
    try {
        const activities = await Activity.findAll();
        res.json(activities);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero delle attività' });
    }
};

exports.getActivityById = async (req, res) => {
    try {
        const activity = await Activity.findByPk(req.params.id);
        if (!activity) {
            return res.status(404).json({ error: 'Attività non trovata' });
        }
        res.json(activity);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero dell\'attività' });
    }
};

exports.updateActivity = async (req, res) => {
    try {
        const activity = await Activity.findByPk(req.params.id);
        if (!activity) {
            return res.status(404).json({ error: 'Attività non trovata' });
        }
        await activity.update(req.body);
        res.json(activity);
    } catch (error) {
        res.status(400).json({ error: 'Errore nell\'aggiornamento dell\'attività' });
    }
};

exports.deleteActivity = async (req, res) => {
    try {
        const activity = await Activity.findByPk(req.params.id);
        if (!activity) {
            return res.status(404).json({ error: 'Attività non trovata' });
        }
        await activity.destroy();
        res.json({ message: 'Attività eliminata con successo' });
    } catch (error) {
        res.status(500).json({ error: 'Errore nell\'eliminazione dell\'attività' });
    }
};

exports.getActivitiesByClient = async (req, res) => {
    try {
        const activities = await Activity.findAll({ where: { clientId: req.params.clientId } });
        res.json(activities);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero delle attività' });
    }
}

exports.getActivitiesByDate = async (req, res) => {
    try {
        const activities = await Activity.findAll({ where: { date: req.params.date } });
        res.json(activities);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero delle attività' });
    }
}

exports.getActivitiesByType = async (req, res) => {
    try {
        const activities = await Activity.findAll({ where: { type: req.params.type } });
        res.json(activities);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero delle attività' });
    }
}

exports.getActivitiesByClientAndDate = async (req, res) => {
    try {
        const activities = await Activity.findAll({ where: { clientId: req.params.clientId, date: req.params.date } });
        res.json(activities);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero delle attività' });
    }
}

/*

// Description: This file contains the logic for the activity routes.
const Activity = require('../models/activity.model');

exports.createActivity = async (req, res) => {
    try {
        const activity = await Activity.create(req.body);
        res.status(201).json(activity);
    } catch (error) {
        res.status(400).json({ error: 'Errore nella creazione dell\'attività' });
    }
};

exports.getActivities = async (req, res) => {
    try {
        const activities = await Activity.findAll();
        res.json(activities);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero delle attività' });
    }
};

exports.getActivityById = async (req, res) => {
    try {
        const activity = await Activity.findByPk(req.params.id);
        if (!activity) {
            return res.status(404).json({ error: 'Attività non trovata' });
        }
        res.json(activity);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero dell\'attività' });
    }
};

exports.updateActivity = async (req, res) => {
    try {
        const activity = await Activity.findByPk(req.params.id);
        if (!activity) {
            return res.status(404).json({ error: 'Attività non trovata' });
        }
        await activity.update(req.body);
        res.json(activity);
    } catch (error) {
        res.status(400).json({ error: 'Errore nell\'aggiornamento dell\'attività' });
    }
};

exports.deleteActivity = async (req, res) => {
    try {
        const activity = await Activity.findByPk(req.params.id);
        if (!activity) {
            return res.status(404).json({ error: 'Attività non trovata' });
        }
        await activity.destroy();
        res.json({ message: 'Attività eliminata con successo' });
    } catch (error) {
        res.status(500).json({ error: 'Errore nell\'eliminazione dell\'attività' });
    }
};

exports.getActivitiesByClient = async (req, res) => {
    try {
        const activities = await Activity.findAll({ where: { clientId: req.params.clientId } });
        res.json(activities);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero delle attività' });
    }
}

exports.getActivitiesByDate = async (req, res) => {
    try {
        const activities = await Activity.findAll({ where: { date: req.params.date } });
        res.json(activities);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero delle attività' });
    }
}

exports.getActivitiesByType = async (req, res) => {
    try {
        const activities = await Activity.findAll({ where: { type: req.params.type } });
        res.json(activities);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero delle attività' });
    }
}

exports.getActivitiesByClientAndDate = async (req, res) => {
    try {
        const activities = await Activity.findAll({ where: { clientId: req.params.clientId, date: req.params.date } });
        res.json(activities);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero delle attività' });
    }
}

 */