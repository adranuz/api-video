const { config } = require('../../config')

// no un middleware/ funcion que se encarga de mandar el stack o no
function withErrorStack(error, stack) {
  if(config.dev) {
    return { error, stack }
  }
  return error
}


// middleware para hacer console.log
function logErrors(err, req, res, next) {
  // console.log(err)
  next(err)
}


// middleware que maneja el error, obtiene el error en html y lo pasa a json
// middleware para manejar el status y su respuesta json
function errorHandler(err, req, res, next) {
  res.status(err.status || 500) // regresa el status del error o un 500
  res.json(withErrorStack(err.message, err.stack)) //maneja la respuesta json con withErrorStack
}

module.exports = {
  logErrors,
  errorHandler
}