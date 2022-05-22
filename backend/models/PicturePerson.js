'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class PicturePerson extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Person }) {
          // define association here
          // person_id
          this.belongsTo(Person, { foreignKey: 'person_id' })
        }
    }
    PicturePerson.init(
        {
            picture_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            url: {
                type: DataTypes.STRING,
                allowNull: false
            },
            // person_id: {
            //     type: DataTypes.INTEGER,
            //     allowNull: false,
            //     // Foreign key
            // }
        },
        {
            sequelize,
            tableName: 'pictures',
            modelName: 'PicturePerson'
        }
    )
    return PicturePerson
}