const express = require('express')
const app = express()// ejecuta express para que cree la nueva app

const { config } = require('./config/index')

app.get('/', (req, res) => res.send("hesrwld"))
app.get('/json', (req, res) => res.send({ hello: "hesdasdasslllo Wsoasdassrld" }))

app.listen(config.port, () => {
  console.log(`Listening https://localhost:${config.port}`)
})
