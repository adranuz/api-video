// const { moviesMock } = require('../utils/mucks/movies')

const MongoLib = require('../lib/mongo')

class MoviesService {
  constructor() {
    this.collection = 'movies'
    this.mongoDB = new MongoLib()
  }

  // async getMovies({ tags }) {
  async getMovies() {

    // const query = tags && { tags: { $in: tags }} //si existen los tags construye el siguiente query
    // const movies = await Promise.resolve(moviesMock)
    const movies = await this.mongoDB.getAll(this.collection)
    return movies || []
  }

  async getMovie({ movieId }) {
    const movie = await this.mongoDB.get(this.collection, movieId)
    return movie || {}
  }

  async createMovie({ movie }) {
    const createMovieId = await this.mongoDB.create(this.collection, movie)
    return createMovieId || {}
  }

  async updateMovie({ movieId, movie }) {
    const updateMovieId = await this.mongoDB.update(this.collection, movieId, movie)
    return updateMovieId || {}
  }

  async deleteMovie({ movieId }) {
    const deleteMovieId = await this.mongoDB.delete(this.collection, movieId)
    return deleteMovieId || {}
  }

  async patchMovie({ movieId, movie }) {
    const patchMovieId = await this.mongoDB.update(this.collection, movieId, movie)
    return patchMovieId || {}
  }

}

module.exports = MoviesService