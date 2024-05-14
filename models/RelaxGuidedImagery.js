const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class RelaxGuidedImagery extends Model {}

RelaxGuidedImagery.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
    },
        user_id: {
            type: Datatypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        image_id: {
            type: Datatypes.INTEGER,
            references: {
                model: 'image',
        },
            key: 'id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            
        },
        created_at: {
            type: Datatypes.DATE,
            allowNull: false,
            defaultValue: Datatypes.NOW,
        },
        updated_at: {
            type: Datatypes.DATE,
            allowNull: false,
            defaultValue: Datatypes.NOW,
        },
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'relax_guided_imagery',
    }
    
);

module.exports = RelaxGuidedImagery;