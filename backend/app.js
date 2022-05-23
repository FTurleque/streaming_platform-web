const express = require('express')
const routers = require('./routers')
const db = require('./models/index')

db.sequelize.sync({ force: true })

const app = express()

app.use(express.urlencoded({ extends: false }))
app.use(express.json())

app.use('/', routers)

app.listen('3000', () => {
    console.log(`Server ready on the port : http://localhost:3000`)
})