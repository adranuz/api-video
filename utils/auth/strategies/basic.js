const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('@hapi/boom'); 
const bcrypt = require('bcrypt');
const UsersService = require('../../../services/users');

passport.use(

  /**
   * BasicStrategy es una estrategia de autentificacion por defecto.
   */
  new BasicStrategy(async function (email, password, cb) {
    const userService = new UsersService();

    try {
      /** Servicios de user para pedir a la base de datos. */
      const user = await userService.getUser({ email });

      /** Si el usuario no existe regresa error de autentificacion */
      if (!user) return cb(boom.unauthorized(), false);

      /** Si la contrasenia no existe regresa error de autentificacion */
      if (!(await bcrypt.compare(password, user.password))) {
        return cb(boom.unauthorized(), false);
      }

      /** Ahora que validamos eliminamos la contrasenia del objeto */
      delete user.password;

      /** Si no paso nada de lo anterior regresamos el usuario */
      return cb(null, user);

    } catch (error) {
      return cb(error);
    }
  })
)