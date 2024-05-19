const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class RelaxGuidedImagery extends Model {}

RelaxGuidedImagery.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    relax_guided_imagery_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    relax_guided_imagery_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "relax_guided_imagery",
  }
);

module.exports = RelaxGuidedImagery;
