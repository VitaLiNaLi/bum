"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: "user_ID" });
    }
  }
  Result.init(
    {
      user_ID: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      time: {
        type: DataTypes.INTEGER,
      },
      enemy_kills: {
        type: DataTypes.INTEGER,
      },
      score_result: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Result",
    }
  );
  return Result;
};
