const joi = require('@hapi/joi');

/**
 * Funcion filtro de validaciones
 */
function validate(data, schema) {
  const { error } = joi.object(schema).validate(data, { errors: { stack: true } });
  return error
};

/**
 * Middleware that verifies if the response or check is an error or not
 * and if it is, trasnforme it
 * @param  {} schema - determina cual sera el formato de la respuesta que vamos a enviar
 * @param  {} check - "body" de la respuesta del request
 */
function validationHandler(schema, check = "body") {
  return function(req, res, next) {
    const error = validate(req[check], schema);

    error ? next(new Error(error)) : next();
  };
};

module.exports = validationHandler;
