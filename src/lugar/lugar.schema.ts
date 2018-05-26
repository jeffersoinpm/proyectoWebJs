import * as Joi from 'joi';
// npm install --save joi
export const USUARIO_SCHEMA = Joi
  .object()
  .keys({
    id: Joi
      .number()
      .required(),
    nombre: Joi
      .string()
      .required()
      .regex(/^[a-zA-Z]{3,30}$/)
      .min(3)
      .max(30),
  });