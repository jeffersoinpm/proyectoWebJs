"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("joi");
// npm install --save joi
exports.TEMPERATURA_SCHEMA = Joi
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
