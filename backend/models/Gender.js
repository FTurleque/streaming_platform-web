'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Gender extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Person }) {
          // define association here
          Gender.hasMany(Person, { 
              foreignKey: { name: 'gender_id', allowNull: false }
            })
        }
    }
    Gender.init(
        {
            gender_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            sequelize,
            tableName: 'genders',
            modelName: 'Gender'
        }
    )
    return Gender
}