const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class RelaxDeepBreathTable extends Model {}

// create fields/columns for Relax model
RelaxDeepBreathTable.init(
  {
    //create the primary key with an auto increment
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    //foreign key to the user table
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    relax_deep_breath_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    relax_deep_breath_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    relax_deep_breath_duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "relax_deep_breath",
  }
);

module.exports = RelaxDeepBreathTable;
