import * as Joi from 'joi';
// npm install --save joi
export const TEMPERATURA_SCHEMA = Joi
  .object()
  .keys({
    id: Joi
      .number()
      .required(),
    fecha: Joi
      .date()
      .required(),
    valorTemperatura: Joi
      .number()
      .required(),
  });