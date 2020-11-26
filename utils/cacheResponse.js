const { config } = require('../config')
/**
 * Esta funcion toma la respuesta de la peticion y la prepara para
 * su retorno al navegador
 * @param  {} res - respuesta a la que vamos a editar
 * @param  {number} seconds - milisegundos
 */
function cacheResponse(res, seconds) {
  console.log(config.dev)
  if (config.dev === true) {
    res.set('Cache-Control', `public, max-age=${seconds}`)
  }
}

module.exports = cacheResponse