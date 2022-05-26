const express = require('express')
const routers = require('./routers')
const db = require('./models/index')

db.sequelize.sync()

const app = express()

app.use(express.urlencoded({ extends: false }))
app.use(express.json())

app.use((req, res, next) => {
    let method = req.method
    let path = req.originalUrl
    console.log(`${method} ${path}`)
    next()
})

app.use('/', routers)

app.listen('3000', () => {
    console.log(`Server ready on the port : http://localhost:3000`)
})