import * as Joi from 'joi';
// npm install --save joi
export const DISPOSITIVO_SCHEMA = Joi
  .object()
  .keys({
    id: Joi
      .number()
      .required(),
    nombre: Joi
      .string()
      .required()
      .regex(/^[a-zA-Z0-9 ]{3,20}$/)
      .min(3)
      .max(20),
  });