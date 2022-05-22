'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class TypeOfMovie extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
          // define association here
        }
    }
    TypeOfMovie.init(
        {
            type_id: {
                type: DataTypes.INTEGER,
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
            tableName: 'type_of_movies',
            modelName: 'TypeOfMovie'
        }
    )
    return TypeOfMovie
}