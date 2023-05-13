"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeModule = void 0;
const common_1 = require("@nestjs/common");
const resume_service_1 = require("./resume.service");
const resume_controller_1 = require("./resume.controller");
const jwt_1 = require("@nestjs/jwt");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("../users/users.model");
const auth_module_1 = require("../auth/auth.module");
const resume_model_1 = require("./resume.model");
const users_module_1 = require("../users/users.module");
let ResumeModule = class ResumeModule {
};
ResumeModule = __decorate([
    (0, common_1.Module)({
        controllers: [resume_controller_1.ResumeController],
        imports: [
            sequelize_1.SequelizeModule.forFeature([resume_model_1.Resume, users_model_1.User]),
            jwt_1.JwtModule.register({
                secret: process.env.PRIVATE_KEY || 'SECRET',
                signOptions: {
                    expiresIn: '30m'
                }
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule
        ],
        exports: [
            resume_service_1.ResumeService
        ],
        providers: [
            resume_service_1.ResumeService,
            jwt_1.JwtModule
        ]
    })
], ResumeModule);
exports.ResumeModule = ResumeModule;
//# sourceMappingURL=resume.module.js.map