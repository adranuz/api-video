const passport = require('passport'); /** Para poder usar autentificacion */
const { Strategy, ExtractJwt } = require('passport-jwt'); /** Para usar un metodo predeterminado de autentificacion */
const boom = require('@hapi/boom'); /** Para manejar el error */
const UsersService = require('../../../services/users'); /** Contiene el metodo para obtener el usuario desde la base de datos */
const { config } = require('../../../config'); /** Para obtener las variables de entorno y con ello el secret para hacer validos los tokens*/


passport.use(
  new Strategy({
    secretOrkey: config.authJwtSecret, /** El secret de las var env */
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), /** Obtenemos el token del header */
  },
    async (tokenPayload, cb) => {
      /** Servicio de usuarios con sus metodos */
      const userService = new UsersService();

      try {
        /** Pide encontrar al usuario de la colleccion mediante su correo */
        const user = await userService.getUser({ email: tokenPayload.email });

        /** Si no lo encuentra regresa el callback con el error */
        if (!user) return cb(boom.unauthorized(), false);

        /** Si encuentra al usuario, elimina su contrasenia del objeto user */
        delete user.password;

        /** Y ahora, devuelve el usuario con el atributo scopes que contiene el token de permisos */
        return cb(null, { ...user, scopes: tokenPayload.scopes });

      } catch (error) {
        return cb(error)
      }
    }),
);
