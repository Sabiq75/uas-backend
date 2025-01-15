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
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    graduation_year: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('fresh graduate','employed','unemployed'),
        allowNull: true,
    },
    company_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    position: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'alumni',
    timestamps: true,
});

module.exports = Alumni;
