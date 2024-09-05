// Importo il controller client

const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client.controller');

// Rotte per i clienti
router.post('/clients', clientController.createClient);         // Crea un cliente
router.get('/clients', clientController.getClients);            // Ottieni tutti i clienti
router.get('/clients/:id', clientController.getClientById);     // Ottieni un cliente per ID
router.put('/clients/:id', clientController.updateClient);      // Aggiorna un cliente per ID
router.delete('/clients/:id', clientController.deleteClient);   // Elimina un cliente per ID

module.exports = router;

// In the routes/client.routes.js file, we define the routes for the client entity.