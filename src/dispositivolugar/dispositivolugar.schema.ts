import * as Joi from 'joi';
// npm install --save joi
export const DISPOSITIVOLUGAR_SCHEMA = Joi
  .object()
  .keys({
    id: Joi
      .number()
      .required(),
  });