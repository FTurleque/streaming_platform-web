"use strict"
const { Model } = require('sequelize')
const Movie = require('./Movie')

module.exports = (sequelize, DataTypes) => {
    class Collection extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Media }) {
            // define association here
            this.hasMany(Media, {
                foreignKey: { name: 'collection_id', allowNull: true }
            })
        }
    }
    Collection.init(
        {
            collection_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            poster_path: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            backdrop_path: {
                type: DataTypes.STRING,
                allowNull: true,
            }
        },
        {
            sequelize,
            tableName: 'collections',
            modelName: 'Collection'
        }
    )
    return Collection
}