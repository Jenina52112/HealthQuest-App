const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Data = sequelize.define('Data', {
    // Define your model fields here
});

module.exports = Data;
