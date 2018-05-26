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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const sesion_entity_1 = require("../sesion/sesion.entity");
const lugar_entity_1 = require("../lugar/lugar.entity");
let UsuarioEntity = class UsuarioEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UsuarioEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 500 }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "nombreUsuario", void 0);
__decorate([
    typeorm_1.Column({ length: 500 }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "contrasena", void 0);
__decorate([
    typeorm_1.Column({ length: 500 }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "correo", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "avatar", void 0);
__decorate([
    typeorm_1.OneToMany(type => sesion_entity_1.SesionEntity, sesion => sesion.usuario),
    __metadata("design:type", Array)
], UsuarioEntity.prototype, "sesiones", void 0);
__decorate([
    typeorm_1.OneToMany(type => lugar_entity_1.LugarEntity, lugar => lugar.usuario),
    __metadata("design:type", Array)
], UsuarioEntity.prototype, "lugares", void 0);
UsuarioEntity = __decorate([
    typeorm_1.Entity('usuario')
], UsuarioEntity);
exports.UsuarioEntity = UsuarioEntity;
//# sourceMappingURL=usuario.entity.js.map