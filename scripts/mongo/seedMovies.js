// ejecuta el siguiente comando para crear los registros
// DEBUG=app:* node scripts/mongo/seedMovies.js

const chalk = require('chalk');
const debug = require('debug')('app:scripts:movies');
const MongoLib = require('../../lib/mongo'); // Para acceder a tu base de datos
const { moviesMock } = require('../../utils/mocks/movies'); // JSON de registros

async function seedMovies() {
  try {
    const mongoDB = new MongoLib(); // Ejecutar los metodos de mongoDB

		// Itera las posicionse del json y cada vez manda a generar un registro
		// con los metodos de mongo
    const promises = moviesMock.map(async movie => {
      await mongoDB.create('movies', movie);
    });

    await Promise.all(promises); // Avisa cuando terminaron todas las promesas
    debug(chalk.green(`${promises.length} movies have been created succesfully`)); // console.log
    return process.exit(0); // Exit a la consola de node, termina el proceso

	} catch (err) { // Manejo de errores, muestra el error y cierra
    debug(chalk.red(err));
    process.exit(1);
  }
}

seedMovies(); // Ejecuta la funcion
