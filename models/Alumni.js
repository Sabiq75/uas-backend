const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Alumni = sequelize.define('Alumni', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    graduationYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    major: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'alumni',
    timestamps: true,
});

module.exports = Alumni;
