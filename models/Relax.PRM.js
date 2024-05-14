const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RelaxPRM extends Model {}

RelaxPRM.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            
        }
    },
    {
        sequelize,
        timestamps: false,
    }
);

module.exports = RelaxPRM;