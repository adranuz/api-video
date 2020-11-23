const assert = require('assert')
const buildMessage = require('../utils/buildMessage')

/**
 * Prueba: llamamos al buildMessage para obtener la respuesta creada
 * y obtenemos la respuesta esperada en la variable expect
 * con assert verificamos 
 */
describe.only('utils - buildMessage', function () {

  /** List movies */
  describe('when receibes an entity and an action and is a list', function () {
    it('should return the respective message with the entity in plural', function () {
      const result = buildMessage('movie', 'list')
      const expect = 'movies list'
      assert.strictEqual(result, expect)
    })
  })

  /** Create movie */
  describe('when receives an entity and an action', function () {
    it('should return the respective message', function () {
      const result = buildMessage('movie', 'create')
      const expect = 'movie created'
      assert.strictEqual(result, expect)
    })
  })
})