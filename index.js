const express = require('express')
const app = express() // corre la apliccion de expres y la llama app
const { config } = require('./config/index.js') // obtenemos las variables de entorno

/** Parser Middleware, you can read the json response with this */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/** Middleware to log all the requests */
const morgan = require('morgan')
app.use(morgan('combined'))


/** Middleware to implement CORS in all routes */
const cors = require('cors')
app.use(cors())


/** Middleware to keep safe the http headers */
const helmet = require("helmet");
app.use(helmet());


/** Routes Middleware */
app.use('/', express.static(__dirname + '/public'));
const moviesApi = require('./routes/movies.js') //rutas permitidas
moviesApi(app)

/** Statics */

/** Middleware that keep the format of the url using slashes at start and end */
const slash = require('express-slash')
app.use(slash())


/** Error Middlewares, always after the routes middleware */
const { logErrors, wrapErrors, errorHandler} = require('./utils/middlewares/errorHandlers')
app.use(logErrors) // Makes a console.log
app.use(wrapErrors) // Validate a boom error
app.use(errorHandler) // Response the error

/** Run the app in the port */
app.listen(config.port, () => { 
  console.log(`Listening https://localhost:${config.port}`);
})