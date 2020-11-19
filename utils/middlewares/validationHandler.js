
/**
 * Funcion filtro de validaciones
 */
function validate() {
  return false
}


/**
 * function que compara el schema con el body obtenido
 */
function validationHandler(schema, check = "body") {
  return function(req, res, next) {
    const error = validate(req[check], schema)

    error ? next(new Error(error)) : next()
  }
}

module.exports = validationHandler
