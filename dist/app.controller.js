"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const usuario_schema_1 = require("./usuario/usuario.schema");
const lugar_schema_1 = require("./lugar/lugar.schema");
const temperatura_schema_1 = require("./temperatura/temperatura.schema");
const generico_pipe_1 = require("./sesion/generico.pipe");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    root() {
        return this.appService.root();
    }
    crearUsuario(usuario) {
        console.log('Usuario correcto');
        return usuario;
    }
    crearLugar(lugar) {
        console.log('Lugar correcto');
        return lugar;
    }
    agregarTemperatura(temperatura) {
        console.log('Temperatura correcta');
        return temperatura;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "root", null);
__decorate([
    common_1.Post('CrearUsuario'),
    __param(0, common_1.Body(new generico_pipe_1.GenericoPipe(usuario_schema_1.USUARIO_SCHEMA))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "crearUsuario", null);
__decorate([
    common_1.Post('CrearLugar'),
    __param(0, common_1.Body(new generico_pipe_1.GenericoPipe(lugar_schema_1.LUGAR_SCHEMA))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "crearLugar", null);
__decorate([
    common_1.Post('AgregarTemperatura'),
    __param(0, common_1.Body(new generico_pipe_1.GenericoPipe(temperatura_schema_1.TEMPERATURA_SCHEMA))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "agregarTemperatura", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map