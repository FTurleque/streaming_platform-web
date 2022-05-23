'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Country extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ ProductionCompany }) {
            // define association here
            this.hasMany(ProductionCompany, {
                foreignKey: { name: 'country_id', allowNull: false },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
        }
    }
    Country.init(
        {
            iso_3166_1: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            sequelize,
            tableName: 'countries',
            modelName: 'Country'
        }
    )
    return Country
}