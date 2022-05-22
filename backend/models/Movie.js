'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Movie extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Media }) {
          // define association here
          this.hasOne(Media, { 
              foreignKey: { name: 'movie_id', allowNull: true }
            })
        }
    }
    Movie.init(
        {
            movie_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            overview: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            release_date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            poster_path: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            backdrop_path: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            duration: {
                type: DataTypes.TIME,
                allowNull: false,
            },
            trailer_url: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            adult: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            tagline: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            vote_average: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            original_title: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            original_language: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            // Limite d'age
            certification_movie: {
                type: DataTypes.INTEGER,
                allowNull: true,
            }
        },
        {
            sequelize,
            tableName: 'movies',
            modelName: 'Movie'
        }
    )
    return Movie
}