const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Sequelize = require('sequelize');

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    recipe_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    ingredients: {
      type: Sequelize.JSON,
      allowNull: false,
    },
    steps: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe',
    tableName: 'recipe'
  }
);

console.log(Recipe === sequelize.models.Recipe);
module.exports = Recipe;