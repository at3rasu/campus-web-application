"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VacanciesModule = void 0;
const common_1 = require("@nestjs/common");
const vacancies_controller_1 = require("./vacancies.controller");
const vacancies_service_1 = require("./vacancies.service");
const sequelize_1 = require("@nestjs/sequelize");
const vacancies_model_1 = require("./vacancies.model");
const jwt_1 = require("@nestjs/jwt");
const auth_module_1 = require("../auth/auth.module");
const users_company_model_1 = require("../users-company/users-company.model");
const users_company_module_1 = require("../users-company/users-company.module");
let VacanciesModule = class VacanciesModule {
};
VacanciesModule = __decorate([
    (0, common_1.Module)({
        controllers: [vacancies_controller_1.VacanciesController],
        imports: [
            sequelize_1.SequelizeModule.forFeature([vacancies_model_1.Vacancy, users_company_model_1.UserCompany]),
            jwt_1.JwtModule.register({
                secret: process.env.PRIVATE_KEY || 'SECRET',
                signOptions: {
                    expiresIn: '30m'
                }
            }),
            users_company_module_1.UsersCompanyModule,
            auth_module_1.AuthModule
        ],
        exports: [
            vacancies_service_1.VacanciesService
        ],
        providers: [
            vacancies_service_1.VacanciesService,
            jwt_1.JwtModule
        ]
    })
], VacanciesModule);
exports.VacanciesModule = VacanciesModule;
//# sourceMappingURL=vacancies.module.js.map