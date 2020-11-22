/** sinon detecta si los metodos fueron llamados o no */
const sinon = require('sinon')

/** Mock completo y la funcion filter de la misma */
const { moviesMock, filteredMoviesMock } = require('./movies')

/** 
 * Creamos los metodos que regresan los datos del mock/simulacion de la DB
 * mediante sinon los creamos para detectar si son llamados o no
 * como normalmente serian llamados por los servicios 
 */
const getAllStub = sinon.stub()
getAllStub.withArgs('movies').resolves(moviesMock)

const tagQuery = { tags : { $in :['Drama'] } }
getAllStub.withArgs('movies', tagQuery).resolves(filteredMoviesMock('Drama'))

const createStub = sinon.stub().resolves(moviesMock[0].id)


/** 
 * Simulacion de las peticiones a la libreria de la base de datos 
 * Cada metodo simula al metodo que seria llamado al momento de correr un 
 * metodo de servicio
 */
class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query)
  }

  create(collection, data) {
    return createStub(collection, data)
  }
}


module.exports = {
  getAllStub,
  createStub,
  MongoLibMock
}

