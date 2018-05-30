"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("joi");
// npm install --save joi
exports.USUARIO_SCHEMA = Joi
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
