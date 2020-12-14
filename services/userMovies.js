const MongoLib = require('../lib/mongo')

class UserMovieService {
  constructor() {
    this.collection = 'user-movies';
    this.mongoDB = new MongoLib();
  }

  /** Get all user-movies, by userId */
  async getUserMovies({ userId }) {
    const query = userId && { userId };
    const userMovies = await this.mongoDB.getAll(this.collection, query);

    return userMovies || [];
  }

  /** Create a user-movies, by userMovie Schema */
  async createUserMovie({ userMovie }) {
    const createdUserMovieId = await this.mongoDB.create(this.collection, userMovie);

    return createdUserMovieId;
  }

  /** Delete a user-movies, by userMovieId Schema */
  async deleteUserMovie({ userMovieId }) {
    const deletedUserMovieId = await this.mongoDB.deleteOne(this.collection, userMovieId);

    return deletedUserMovieId;
  }
};

module.exports = UserMovieService;