const express = require('express');

/**
 * ApiKeysService - para acceder al metodo declarado hacia la collection
 * passport - para acceder a los diferentes metodos de passport
 * boom - para la interpretacion de errores
 * jwt - para crear el token firmado
 * config - para obtener los datos de configuracion de firma de token
 * UsersService - se va a usar su metodo para crear usuarios
 * validationHandler - para validar los schemas
 * createUserSchema - schema para crear un nuevo usuario
 */
const ApiKeysService = require('../services/apiKeys');
const passport = require('passport');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const { config } = require('../config');
const UsersService = require('../services/users');
const validationHandler = require('../utils/middlewares/validationHandler');
const { createUserSchema } = require('../utils/schemas/users');

/**
 * Trae la estrategia basic para la autentificacion,
 * con esto estamos agregando a nuestro metodo passport lo que tenemos en
 * el archivo requerido
 */
require('../utils/auth/strategies/basic');

function authApi(app) {
  const router = express.Router();
  app.use('/api/auth', router);

  const apiKeyService = new ApiKeysService();
  const userService = new UsersService();

  router.post(
    '/signin',
    async (req, res, next) => {
      /** apiKeyToken es obtenido del body */
      const { apiKeyToken } = req.body;

      /** Si no tenemos el valor regresamos el error con boom */
      if (!apiKeyToken) next(boom.unauthorized('apiKeyToken is required'));

      /** Usa passport para autentificar, con la opcion basic */
      passport.authenticate('basic', (error, user) => {
        try {
          /** Verifica si hay error o no hay user */
          if (error || !user) next(boom.unauthorized())

          /**
           * Accede al metodo login del request donde crea la sesion
           * Obtiene el usuario,
           * Especifica que no es una sesion literal en el navegador,
           * Ejecuta la funcion final
          */
          req.login(user, { session: false }, async (error) => {
            /** Maneja el error si lo hay */
            if (error) next(error);

            /** Obtenemos el token de la DB desde el token obtenido del req.body */
            const apiKey = await apiKeyService.getApiKey({ token: apiKeyToken });

            /** Verifica que si se haya obtenido el token */
            if (!apiKey) next(boom.unauthorized());

            /** Obten los datos de tu usuario */
            const { _id: id, name, email } = user;

            /** Genera tu payload con los datos del usuario */
            const payload = {
              sub: id,
              name,
              email,
              scopes: apiKey.scopes
            }

            /** Genera tu token con la libreria jwt */
            const token = jwt.sign(payload, config.authJwtSecret, { expiresIn: '15min'});

            /** Si todo va bien retornamos el token */
            return res.status(200).json({ token, user: { id, name, email} })

          });
        } catch (error) {
          next(error);
        };
      })(req, res, next);

    },
  );

  router.post(
    '/signup',
    validationHandler(createUserSchema),
    async (req, res, next) => {
      /** Obtenemos el usuario de la request */
      const { body: user } = req;
      try {
        /** Crea el usuario y obtiene el id */
        const createdUserId = await userService.createUser({ user })
        res.status(201).json({
          data: createdUserId,
          message: 'user created'
        })
      } catch (error) {
        next(error)
      }
    }
  );

};

module.exports = authApi;