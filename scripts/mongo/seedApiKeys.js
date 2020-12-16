// ejecuta el siguiente comando para crear los registros
// DEBUG=app:* node scripts/mongo/seedApiKeys.js

const chalk = require('chalk');
const debug = require('debug')('app:scripts:api-keys');
const crypto = require('crypto'); // Libreria de encriptacion de strings
const MongoLib = require('../../lib/mongo');

// Rutas permitidas para el admin
const adminScopes = [
  'signin:auth',
  'signup:auth',
  'read:movies',
  'create:movies',
  'update:movies',
  'delete:movies',
  'read:user-movies',
  'create:user-movies',
  'delete:user-movies'
];

// Rutas permitidas para el publico
const publicScopes = [
  'signin:auth',
  'signup:auth',
  'read:movies',
  'read:user-movies',
  'create:user-movies',
  'delete:user-movies'
];

// Array de tokens para cada scope
const apiKeys = [
  {
    token: generateRandomToken(),
    scopes: adminScopes
  },
  {
    token: generateRandomToken(),
    scopes: publicScopes
  }
];

// Genera un token a partir de nada
function generateRandomToken() {
  const buffer = crypto.randomBytes(32);
  return buffer.toString('hex');
}

async function seedApiKeys() {
  try {
    const mongoDB = new MongoLib(); // Metodos de la libreria de mongo

    const promises = apiKeys.map(async apiKey => { // Iteracion de apiKeyys, cada uno de estos sera un token mediante la funcion de crear apikeys
      await mongoDB.create('api-keys', apiKey)
    });

    await Promise.all(promises); // Espera las dos peticiones
    debug(chalk.green(`${promises.length} api-keys have been generated successfully`));
    return process.exit(0); // Termina el proceso
  } catch (err) {
    debug(chalk.red(err));
    process.exit(1);
  }
}

seedApiKeys();