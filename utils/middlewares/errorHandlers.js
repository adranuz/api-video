const boom = require('@hapi/boom')
require('dotenv').config();
const debug = require("debug")("db:mock");

/**
 * Function that returns the hole error if we are in development mode,
 * and if we are not, it returns only the short message
 * @param  {} error - error title
 * @param  {} stack - error content
 */
function withErrorStack(error, stack) {
  if (!process.env.NODE_ENV === 'production') {
    console.log('Estamos en developer')
    // console.log(process.env.NODE_ENV)
    return { ...error, stack } //esto es asi porque tomamos el error y lo pasamos por boom
  }
  return error
}

/**
 * Middleware that receives the error and show it by the terminal or console
 * and take it to the next middleware.
 * @param  {} err - error object
 * @param  {} next - send info to the next middleware
 */
function logErrors(err, req, res, next) {
  debug(err)
  next(err)
}

/**
 * Middleware that receives the error and verify if its a boom object
 * if it isn't the error is mark as a not boom, or badImplementation 
 * and is sent to the next middleware.
 * @param  {} err - error obtenido del middleware anterior
 * @param  {} next - callback que conecta el resultado con el siguiente middleware
 */
function wrapErrors(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation(err))
  }
  next(err)
}

/**
 * Middleware that receives the Boom error 
 * and sends it as a response of the request
 * @param  {} err - a Boom error that has statusCode & payload
 * @param  {} res - respuesta mandada de la peticion
 */
function errorHandler(err, req, res, next) {
  const { output: { statusCode, payload } } = err
  res.status(statusCode) 
  res.json(withErrorStack(payload, err.stack))
}

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler
}
