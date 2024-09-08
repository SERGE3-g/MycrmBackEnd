// In questo file, abbiamo definito il modello Country con due colonne: id e name. Abbiamo anche specificato il nome della tabella e se deve avere i timestamp.
// Ora, dobbiamo creare la tabella nel database. Per fare ciò, eseguiamo il comando sync() sul modello Country.


const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Definire il modello Country
const Country = sequelize.define('Country', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'countries',
        timestamps: true,
    });

module.exports = Country;
