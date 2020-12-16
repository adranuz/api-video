const joi = require('@hapi/joi');

/**
 * Importa:
 * El schema del id de la pelicula.
 * El schema del id del usuario.
 */
const { movieIdSchema } = require('./movies');
const { userIdSchema } = require('./users');

/** Schema del id de vinculacion a favoritos. */
const userMovieSchema = joi.string().regex(/^[0-9a-fA-F]/);

/** Schema del contenido de la vinculacion */
const createUserMovieSchema = {
  userId: userIdSchema,
  movieId: movieIdSchema,
}

module.exports = {
  userMovieSchema,
  createUserMovieSchema,
}
