const MongoLib = require('../lib/mongo');

/**
 * Class que define la collection a la que va a ingresar y crea una conexion con mongo
 * Cada uno de sus metodos accede de alguna manera a la base de datos
 * de manera que en su conjunto hacen un CRUD en ella
 */
class MoviesService {
  constructor() {
    this.collection = 'movies';
    this.mongoDB = new MongoLib();
  };

  async getMovies({ tags }) {
    const query = tags && { tags: { $in: tags }}; //si existen los tags construye el siguiente query
    const movies = await this.mongoDB.getAll(this.collection, query);
    return movies || [];
  };

  async getMovie({ movieId }) {
    const movie = await this.mongoDB.get(this.collection, movieId);
    return movie || {};
  };

  async createMovie({ movie }) {
    const createMovieId = await this.mongoDB.create(this.collection, movie);
    return createMovieId || {};
  };

  async updateMovie({ movieId, movie }) {
    const updateMovieId = await this.mongoDB.update(this.collection, movieId, movie);
    return updateMovieId || {};
  };

  async deleteMovie({ movieId }) {
    const deleteMovieId = await this.mongoDB.delete(this.collection, movieId);
    return deleteMovieId || {};
  };

  async patchMovie({ movieId, movie }) {
    const patchMovieId = await this.mongoDB.update(this.collection, movieId, movie);
    return patchMovieId || {};
  };

};

module.exports = MoviesService;
