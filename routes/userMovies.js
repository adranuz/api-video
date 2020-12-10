const express = require('express');

/**
 * Para hacer funcionar este endpoint:
 * UserMovieService - Metodos de conexion con mongo.
 * validationHandler - Libreria de validacion de Schemas.
 * 
 * Si miras el archivo importado de UserMovieService, veras que usa algunso schemas:
 * userIdSchema - verificar que sea un id de user.
 * movieIdSchema - verificar que sea un id de movie.
 * userMovieSchema - verificar el schema de los registros de userMovie
 */
const UserMovieService = require('../services/userMovies');
const validationHandler = require('../utils/middlewares/validationHandler');
const { movieIdSchema } = require('../utils/schemas/movies');
const { userIdSchema } = require('../utils/schemas/users');
const { createUserMovieSchema } = require('../utils/schemas/userMovies');

/** Definimos las rutas para userMovies */
function userMoviesApi(app) {
  
  /** Crea el router */
  const router = express.Router();
  /** Crea la ruta y adjunta el router que vamos a terminar de declarar */
  app.user('/api/user-movies', router);
  /** Crea una instancia de los servicios, que contiene los metodos de mongo */
  const userMovieService = new UserMovieService();

  /** Get all from this user */
  router.get(
    '/',
    validationHandler({ userId: userIdSchema }, 'query'),
    async (req, res, next) => {
      const { userId } = req.query;
      try {
        const userMovies = await userMovieService.getUserMovies({ 
          userId, 
        });
        res.status(200).json({
          data: userMovies,
          message: 'user movies list',
        })
      } catch (error) {
        next(error);
      }
    }
  )

  /** Create one for this user */
  router.post(
    '/',
    validationHandler(createUserMovieSchema),
    async (req, res, next) => {
      const { body: userMovie } = req;

      try {
        const createUserMovieId = await userMovieService.createUserMovie({
          userMovie,
        })
        res.status(200).json({
          data: createUserMovieId,
          message: 'user-movie',
        })
      } catch (error) {
        next(error);
      }
    }
  )

  /** Delete one for this user */

  router.delete(
    '/:userMovieId',
    validationHandler({ userMovieId: movieIdSchema}, 'params'),
    async (req, res, next) => {
      const { userMovieId } = req.params;

      try {
        const deleteUserMovieId = await userMovieService.deleteUserMovie({
          userMovieId
        });
        res.status(200).json({
          data: deleteUserMovieId,
          message: 'user-movie deleted'
        })
      } catch (error) {
        next(error)
      }
    }
  )

};
module.exports = userMoviesApi;