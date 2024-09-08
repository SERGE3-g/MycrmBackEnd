const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Definire il modello Attività (Activity)
const Activity = sequelize.define('Activity', {

    id: {
        type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
    },
    clientId: {
        type: DataTypes.INTEGER,
            allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
            allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
            allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
            allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
            allowNull: true,
    },
}, {
    tableName: 'activities',
        timestamps: true,
});

module.exports = Activity;
// In the code snippet above, we define the Opportunity model with the following fields:
// title, description, value, and status. The title and description fields are of type STRING and TEXT, respectively,