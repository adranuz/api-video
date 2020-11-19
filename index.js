const express = require('express')
const bodyParser = require('body-parser')
const app = express() // corre la apliccion de expres y la llama app

const { config } = require('./config/index.js') // obtenemos las variables de entorno
const moviesApi = require('./routes/movies.js') //rutas permitidas
console.log(config.dev)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json) //middleware body-parser

moviesApi(app)


// agregando middlewares de manejo de error, deben ir siempre despues de la ruta
const { logErrors, errorHandler} = require('./utils/middlewares/errorHandlers')
app.use(logErrors)
app.use(errorHandler)


app.listen(config.port, () => { // corremos la app en el puerto
  console.log(`Listening https://localhost:${config.port}`)// log cualquiera
})