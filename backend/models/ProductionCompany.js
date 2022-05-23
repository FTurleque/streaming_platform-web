"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductionCompany extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Country, Media }) {
      // define association here
      this.belongsTo(Country, { foreignKey: "country_id" });
      this.belongsToMany(Media, { through: "produce" });
    }
  }
  ProductionCompany.init(
    {
      production_company_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      logo_path: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "production_companies",
      modelName: "ProductionCompany",
    }
  );
  return ProductionCompany;
};
