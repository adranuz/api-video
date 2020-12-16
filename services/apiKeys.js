const MongoLib = require('../lib/mongo');

/**
 * Clase donde definimos la collection, la libreria
 * y los metodos donde vamos generar y obtener nuestros datos
 * en este caso un unico metodo que nos retorna todos los tokens
 */

class ApiKeysService {
  constructor() {
    this.collection = 'api-keys';
    this.mongoDB = new MongoLib();
  }

  async getApiKey({ token }) {
    const [ apiKey ] = await this.mongoDB.getAll(this.collection, { token });
    return apiKey;
  }
}

module.exports = ApiKeysService;
