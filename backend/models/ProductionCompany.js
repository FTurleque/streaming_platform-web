'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class ProductionCompany extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Country }) {
          // define association here
          this.belongsTo(Country, { foreignKey: 'country_id'})
        }
    }
    ProductionCompany.init(
        {
            production_company_id: {
                type: DataTypes.INTERGER,
                allowNull: false,
                primaryKey: true
            },
            logo_path: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            // origin_country: {
            //     type: DataTypes.STRING,
            //     allowNull: true,
            //     // Foreign key Country
            // }
        },
        {
            sequelize,
            tableName: 'production_companies',
            modelName: 'ProductionCompany'
        }
    )
    return ProductionCompany
}