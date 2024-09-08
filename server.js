const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./config/database');
const clientRoutes = require('./routes/client.routes');
const leadRoutes = require('./routes/lead.routes');
const activityRoutes = require('./routes/activity.routes');
const cityRoutes = require('./routes/city.routes');
const countryRoutes = require('./routes/country.routes');
const contactRoutes = require('./routes/contact.routes');
const noteRoutes = require('./routes/note.routes');
const taskRoutes = require('./routes/task.routes');
const userRoutes = require('./routes/user.routes');
const saleRoutes = require('./routes/sale.routes');
const opportunityRoutes = require('./routes/opportunity.routes');
const dotenv = require('dotenv');

dotenv.config();

connectDB();

const app = express();

app.use(bodyParser.json());

// Rotte
app.use('/api', clientRoutes);
app.use('/api', leadRoutes);
app.use('/api', opportunityRoutes);
app.use('/api',activityRoutes);
app.use('/api', cityRoutes);
app.use('/api', countryRoutes);
app.use('/api', contactRoutes);
app.use('/api', noteRoutes);
app.use('/api', taskRoutes);
app.use('/api', userRoutes);
app.use('/api', saleRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// In the server.js file, we import the clientRoutes, leadRoutes, and opportunityRoutes files.
// Description: This file is the entry point of the application. It starts the server and listens on port 3000.
// It also imports the clientRoutes, leadRoutes, and opportunityRoutes files and uses them as middleware in the application.