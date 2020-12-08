require('dotenv').config();

const config = {
  // dev: process.env.NODE_ENV.trim() !== 'production',
  dev: process.env.NODE_ENV !== 'production' ? true : false,
  port: process.env.PORT || 3000,
  cors: process.env.CORS,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT
}
console.log(config)
module.exports = { config }