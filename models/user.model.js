const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Definire il modello Utente con i campi id, name, email, password e role
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'users',
    timestamps: true,
});

module.exports = User;

// In questo snippet di codice, definiamo il modello User con i seguenti campi: id, name, email, password e role. I campi name, email e password sono di tipo STRING, mentre il campo role è di tipo STRING. Il campo email è unico e non può essere nullo. Il campo id è la chiave primaria e autoincrementale.
// Il modello User è definito nella tabella users con i timestamp abilitati. Il modello User è esportato per essere utilizzato in altre parti dell'applicazione.