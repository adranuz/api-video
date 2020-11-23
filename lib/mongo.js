const { MongoClient, ObjectId } = require('mongodb')
const { config } = require('../config')
const debug = require('debug')('app:db')
const debugE = require('debug')('app:error')

// obtenemos las variables de entorno
// encodeURIComponent le avisa que el siguiente valor puede tener caracteres especiales
const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = config.dbName
const DB_PORT = config.dbPort ? `:${config.dbPort}` : ''

// mongodb+srv://db_user:<password>@cluster0.levef.mongodb.net/<dbname>?retryWrites=true&w=majority
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}${DB_PORT}/${DB_NAME}?retryWrites=true&w=majority`
// const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`
// const MONGO_URI = `mongodb+srv://db_user:Yyx3WbqaLAg0EFY0@cluster0.levef.mongodb.net/videos_db?retryWrites=true&w=majority`

// mongodb+srv://db_user:Yyx3WbqaLAg0EFY0@cluster0.levef.mongodb.net/videos_db?retryWrites=true&w=majority


class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    this.dbName = DB_NAME
  }

  //PATRON SINGLETON PARA QUE HAYA UNA SOLA INSTANCIA DE LA CONEXION
  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect(err => {
          if (err) {
            debugE('It was an error')
            reject(err)
          }
          debug('Conected successfully to Mongo')
          resolve(this.client.db(this.dbName))
        })
      })
    }
    return MongoLib.connection
  }

  // ACCIONES DEL CRUD

  /*
  metodo
  retorna la conexion a la base de datos
  si todo va bien retorna un id
  */
  
  getAll(collection, query) {
    return this.connect().then(db => {
      return db.collection(collection).find(query).toArray()
    })
  }

  get(collection, id) {
    return this.connect().then(db => {
      return db.collection(collection).findOne({ _id: ObjectId(id) })
    })
  }

  create(collection, data) {
    return this.connect().then(db => {
      return db.collection(collection).insertOne(data)
    }).then(result => result.insertedId)
  }

  update(collection, id, data) {
    return this.connect().then(db => {
      return db.collection(collection).updateOne({ _id: ObjectId(id)}, { $set: data }, { upsert: true })
    }).then(result => result.upsertedId || id)
  }

  delete(collection, id) {
    return this.connect().then(db => {
      return db.collection(collection).deleteOne({ _id: ObjectId(id) })
    }).then(() => id)
  }

}

module.exports = MongoLib