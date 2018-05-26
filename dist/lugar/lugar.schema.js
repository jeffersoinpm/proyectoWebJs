"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
exports.USUARIO_SCHEMA = Joi
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
//# sourceMappingURL=lugar.schema.js.map