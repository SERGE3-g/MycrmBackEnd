
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Definire il modello Attività (Activity)
const City = sequelize.define('City', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    countryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'cities',
    timestamps: true,
});

module.exports = City;

