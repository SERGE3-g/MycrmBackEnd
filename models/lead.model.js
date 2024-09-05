// models/lead.model.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Definire il modello Lead
const Lead = sequelize.define('Lead', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('new', 'contacted', 'qualified', 'lost'),
        defaultValue: 'new',
    },
}, {
    tableName: 'Leads',
    timestamps: true,
});

module.exports = Lead;