import * as Joi from 'joi';
// npm install --save joi
export const USUARIO_SCHEMA = Joi
  .object()
  .keys({
    id: Joi
      .number()
      .required(),
    nombreUsuario: Joi
      .string()
      .required()
      .regex(/^[a-zA-Z]{5,20}$/)
      .min(5)
      .max(20),
    contrasena: Joi
      .string()
      .alphanum()
      .min(8)
      .required(),
    correo: Joi
      .string()
      .email()
      .required(),
    avatar: Joi
      .string(),
  });