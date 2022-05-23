"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Work extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Media, Person }) {
      // define association here
      this.belongsTo(Media, { foreignKey: "media_id" });
      this.belongsTo(Person, { foreignKey: "person_id" });
    }
  }
  Work.init(
    {
      person_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      media_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      department: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      job: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      character_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "worker",
      modelName: "Work",
    }
  );
  return Work;
};
