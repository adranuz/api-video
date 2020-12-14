const MongoLib = require('../lib/mongo');
const bcrypt = require('bcrypt');

class UsersService {
  constructor() {
    this.collection = 'users',
    this.mongoDB = new MongoLib()
  }

  async getUser({ email }) {
    /** Aqui no entiendo porque no funciona si declaro la variable de otra manera que no sea un vector */
    const [ user ] = await this.mongoDB.getAll(this.collection, { email });
    return user;
  }

  async createUser({ user }) {
    const { name, email, password } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createUserId = await this.mongoDB.create(this.collection, {
      name,
      email,
      password: hashedPassword,
    })
    return createUserId
  }
};

module.exports = UsersService;