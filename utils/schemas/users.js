const joi = require('@hapi/joi');

/** Generando schemas */
const userIdSchema = joi.string().regex(/^[0-9a-fA-F]/);

const createUserSchema = {
  name: joi.string().max(100).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  isAdmin: joi.boolean(),
}

module.exports = {
  userIdSchema,
  createUserSchema
}