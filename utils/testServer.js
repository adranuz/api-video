const express = require('express')
const supertest = require('supertest')

/**
 * Esta funcion genera un servidor de pruebas, 
 * desde donde haremos nuestras pruebas 
 * @param  {} route - rutas que probaremos
 */
function testServer(route) {
  const app = express()
  route(app)
  return supertest(app)
}

module.exports = testServer