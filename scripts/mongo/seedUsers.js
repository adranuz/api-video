// ejecuta el siguiente comando para crear los registros
// DEBUG=app:* node scripts/mongo/seedUsers.js

const bcrypt = require('bcrypt'); // libreria para codificar strings
const chalk = require('chalk'); // Darle color a la terminal
const debug = require('debug')('app:scripts:users');
const MongoLib = require('../../lib/mongo'); // Metodos crear registros en mongo
const { config } = require('../../config/index'); // Variables de entorno

// Array de usuarios
const users = [
  {
    email: 'root@undefined.sh',
    name: 'ROOT',
    password: config.defaultAdminPassword,
    isAdmin: true // Este va a ser admin
  },
  {
    email: 'jose@undefined.sh',
    name: 'Jose María',
    password: config.defaultUserPassword
  },
  {
    email: 'maria@undefined.sh',
    name: 'María Jose',
    password: config.defaultAdminPassword
  }
];


async function createUser(mongoDB, user) {
  const { name, email, password, isAdmin } = user;
  const hashedPassword = await bcrypt.hash(password, 10); // Hashea el password

  const userId = await mongoDB.create('users', { // Crea el usuario en mongo
    name,
    email,
    password: hashedPassword,
    isAdmin: Boolean(isAdmin)
  });

  return userId; // Regresa el id de creacion
}

async function seedUsers() {
  try {
    const mongoDB = new MongoLib(); // Libreria con los metodos de mongo

		// Itera en el array, en cada iteracion toma la libreria de mongo y el
		// objeto al metodo createUser(),
		// y lo que retorne lo imprimimos en la linea de debug
    const promises = users.map(async user => {
      const userId = await createUser(mongoDB, user);
      debug(chalk.green('User created with id: ', userId));
    });

		// Cuando termine todas las promesas sale del proceso
    await Promise.all(promises);
    return process.exit(0);
  } catch (err) { // Manejo del error
    debug(chalk.red(err));
    return process.exit(1);
  }
}

/* Corre la funcion */
seedUsers();