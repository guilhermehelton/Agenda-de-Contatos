const express = require('express')
const controllers = require('./controllers')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/', controllers.contatos)


app.listen('3001', () => {
    console.log('Server rodando')
})