const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Definire il modello Nota  (Note)
const Note = sequelize.define('Note', {
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
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'notes',
    timestamps: true,
});

module.exports = Note;
// In the code snippet above, we define the Note model with the following fields:
// id, clientId, userId, content, and date. The id field is the primary key and is auto-incremented.
// The clientId and userId fields are foreign keys that reference the Client and User models, respectively.
// The content field is of type TEXT, and the date field is of type DATE. The model is defined with the tableName 'notes' and includes timestamps for createdAt and updatedAt fields.