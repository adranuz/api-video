const boom = require('@hapi/boom')


/**
 * Function that returns the result thorught Boom when issue is
 * not found
 * @param  {} req
 * @param  {} res - response that boom generate
 */
function notFoundHandler(req, res) {
  const {
    output: { statusCode, payload }
  } = boom.notFound()
  
  res.status(statusCode).json(payload)
}

module.exports = notFoundHandler