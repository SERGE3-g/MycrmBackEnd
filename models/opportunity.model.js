// Importare il modulo sequelize e definire il modello Opportunity

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Definire il modello Opportunità
const Opportunity = sequelize.define('Opportunity', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    value: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('open', 'won', 'lost'),
        defaultValue: 'open',
    },
}, {
    tableName: 'Opportunities',
    timestamps: true,
});

module.exports = Opportunity;
// In the code snippet above, we define the Opportunity model with the following fields:
// title, description, value, and status. The title and description fields are of type STRING and TEXT, respectively,