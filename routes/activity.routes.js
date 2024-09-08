
const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activity.controller');

router.post('/activities',activityController.createActivity);
router.get('/activities/',activityController.getActivities);
router.get('/activities/:id', activityController.getActivityById);
router.put('/activities/:id', activityController.updateActivity);
router.delete('/activities/:id', activityController.deleteActivity);

module.exports = router;
// routes/activity.routes.js