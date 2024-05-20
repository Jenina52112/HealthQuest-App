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
    image_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      /*
            references: {
                model: 'image',
                
        },
            key: 'id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            */
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
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
