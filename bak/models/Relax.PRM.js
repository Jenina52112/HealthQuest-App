const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class RelaxPRM extends Model {}
// create fields/columns for Relax PRM model
RelaxPRM.init(
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
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    relax_PRM_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    relax_PRM_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = RelaxPRM;
