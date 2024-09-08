// Definire il modello Contatto
// in questo snippet di codice, definiamo il modello Contact con i seguenti campi: id, clientId, name, email, phone e position. I campi clientId e name sono obbligatori, mentre gli altri campi sono facoltativi.
// Il campo id è la chiave primaria del modello e viene generato automaticamente con autoIncrement: true. Il modello Contact è definito con il nome contacts e include i timestamp createdAt e updatedAt. Infine, esportiamo il modello Contact per utilizzarlo altrove nel nostro progetto.
// Definire le associazioni tra i modelli Dopo aver definito i modelli Contact e Client, possiamo definire le associazioni tra di loro.
// In particolare, vogliamo definire che un contatto appartiene a un cliente e che un cliente può avere più contatti. Per fare ciò, dobbiamo aggiungere le seguenti associazioni nei nostri modelli:
// - Un cliente ha molti contatti (hasMany)
// - Un contatto appartiene a un solo cliente (belongsTo)
// Per aggiungere queste associazioni, dobbiamo modificare i modelli Contact e Client come segue:

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Definire il modello Contatto
const Contact = sequelize.define('Contact', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    position: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'contacts',
    timestamps: true,
});

module.exports = Contact;
