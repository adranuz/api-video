const express = require('express')
const app = express() // corre la apliccion de expres y la llama app

const { config } = require('./config/index.js') // obtenemos las variables de entorno
const moviesApi = require('./routes/movies.js') //rutas permitidas

app.use(express.json) //middleware body-parser



moviesApi(app)


app.listen(config.port, () => { // corremos la app en el puerto
  console.log(`Listening https://localhost:${config.port}`)// log cualquiera
})