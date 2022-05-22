"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Movie, Collection }) {
      // define association here
      this.belongsTo(Movie, { foreignKey: 'movie_id' })
      
      this.belongsTo(Collection, { foreignKey: 'collection_id' })
    }
  }
  Media.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      language: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      format: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      urlFile: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      serie_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          // ForeignKey
      },
      // movie_id: {
      //     type: DataTypes.INTEGER,
      //     allowNull: true,
      //     // ForeignKey
      // },
      // collection_id: {
      //     type: DataTypes.INTEGER,
      //     allowNull: true,
      //     // ForeignKey
      // }
    },
    {
      sequelize,
      tableName: 'medias',
      modelName: "Media",
    }
  )
  return Media
}
