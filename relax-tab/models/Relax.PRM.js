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
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        relax_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'relax',
                key: 'id'
            }  
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
    }
);

module.exports = RelaxPRM;