"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("joi");
// npm install --save joi
exports.LUGAR_SCHEMA = Joi
    .object()
    .keys({
    id: Joi
        .number()
        .required(),
    nombre: Joi
        .string()
        .required()
        .regex(/^[a-zA-Z ]{3,30}$/)
        .min(3)
        .max(30),
});
