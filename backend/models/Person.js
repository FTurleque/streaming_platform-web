'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Person extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Gender, PicturePerson }) {
          // define association here
          // gender_id
          this.belongsTo(Gender, { foreignKey: 'gender_id' })

          this.hasMany(PicturePerson, { 
              foreignKey: { name: 'person_id', allowNull: true }
            })
        }
    }
    Person.init(
        {
            person_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            biography: {
                type: DataTypes.STRING,
                allowNull: true
            },
            birthdate: {
                type: DataTypes.DATE,
                allowNull: true
            },
            place_of_birth: {
                type: DataTypes.STRING,
                allowNull: true
            },
            deathday: {
                type: DataTypes.DATE,
                allowNull: true
            },
            profile_path: {
                type: DataTypes.STRING,
                allowNull: true
            },
            // gender_id: {
            //     type: DataTypes.INTEGER,
            //     allowNull: false,
            //     // Foreign key Gender
            // }
        },
        {
            sequelize,
            tableName: 'persons',
            modelName: 'Person'
        }
    )
    return Person
}