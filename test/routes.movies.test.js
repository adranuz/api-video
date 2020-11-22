/** Verifica que tanto se parecen dos datos  */
const assert = require('assert')

/** Cada require elegimos si obtenemos el paquete real o los mocks  */
const proxyquire = require('proxyquire')

/** Mocks de la base de datos y los servicios */
const {   
  moviesMock,
  MoviesServiceMock
} = require('../utils/mocks/movies')

/** Servidor de tests */
const testServer = require('../utils/testServer')

/** describe imprime en consola y corre la funcion siguiente*/
describe('route - movies', function() {

  /** 
   * proxyquire toma el archivo del checkpoint 'routes/movies.js'
   * para probar que las peticiones esten funcionando correctamente.
   * Y para verificar que la respuesta es retornada de la manera que queremos
   * se implantan el MovieServiceMock en el lugar donde se requiere la ruta de los servicios
  */
  const route = proxyquire('../routes/movies', {

    /** intercambia services/movies por la clase MoviesServiceMock  */
    '../services/movies': MoviesServiceMock
  })

  /** Crea un servidor de prueba que maneje esta ruta declarada */
  const request = testServer(route)

  /** describe imprime en consola y llama al callback */
  describe('GET /movies', function() {

    /** 
     * Prueba: imprime este mensaje y corre el callback
     * request corre el servidor de pruebas generando una peticion get
     * que va a la ruta expuesta, y el metodo expect
     * declara esperar un status 200 y mediante done terminamos la prueba
     */
    it('should respond with status 2000', function(done) {
      request.get('/api/movies').expect(200, done)
    })

    /**
     * Prueba: hace una peticion get a la ruta y verifica el contenido
     * request.get accede a la ruta, .end maneja la respuesta y el error
     * pero solamente vamos a evaluar la respuesta,
     * asset es un modulo core de node que nos permite evaluar el tipo y contenido de valores y variables
     * en este caso verificamos res.body sea estrictamente igual a lo que enviamos como segundo parametro
     * y finaliza la prueba con done
     */
    it('should respond with the list of movies', function(done) {
      request.get('/api/movies').end((err, res) => {
        assert.deepEqual(res.body, {
          data: moviesMock,
          message: 'movies listed'
        })
        done()
      })
    })
  })
})