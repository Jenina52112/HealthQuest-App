const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RelaxDeepBreath extends Model {}


// create fields/columns for Relax model
RelaxDeepBreath.init(
   {
     id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      relax_deep_breath_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'relax_deep_breath',
          key: 'id'
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
   } ,
     relax_deep_breath_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      relax_deep_breath_description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      relax_deep_breath_duration: {
           
       }
   },
   {
       sequelize,
       freezeTableName: true,
       underscored: true,
       modelName: 'relax_deep_breath'
   }
)

module.exports = RelaxDeepBreath;