const db = require('../models/index')
const sequelize = db.sequelize


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.log('Unable to connect to the database:', err);
  })

module.exports = db