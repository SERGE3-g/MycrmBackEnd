
const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note.controller');

router.post('/notes', noteController.createNote);
router.get('/notes/', noteController.getNotes);
router.get('/notes/:id', noteController.getNoteById);
router.put('/notes/:id', noteController.updateNote);
router.delete('/notes/:id', noteController.deleteNote);

module.exports = router;
// The routes/note.routes.js file defines the routes for the notes API.