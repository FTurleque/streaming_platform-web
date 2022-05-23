"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ PicturePerson, Media, Work }) {
      // define association here
      this.hasMany(PicturePerson, {
        foreignKey: { name: "person_id", allowNull: true },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      this.belongsToMany(Media, { through: Work });
      this.hasMany(Work, {
        foreignKey: { name: "person_id", allowNull: false },
      });
    }
  }
  Person.init(
    {
      person_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM,
        values: ["male", "female", "intersex"],
        allowNull: false,
      },
      biography: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      birthdate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      place_of_birth: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      deathday: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      profile_path: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      // gender_id: {
      //     type: DataTypes.INTEGER,
      //     allowNull: false,
      //     // Foreign key Gender
      // }
    },
    {
      sequelize,
      tableName: "persons",
      modelName: "Person",
    }
  );
  return Person;
};
