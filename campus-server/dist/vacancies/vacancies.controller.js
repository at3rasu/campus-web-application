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
exports.VacanciesController = void 0;
const common_1 = require("@nestjs/common");
const vacancies_service_1 = require("./vacancies.service");
const create_vacancy_dto_1 = require("./dto/create-vacancy.dto");
const roles_guard_1 = require("../auth/roles.guard");
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
const platform_express_1 = require("@nestjs/platform-express");
let VacanciesController = class VacanciesController {
    constructor(vacanciesService) {
        this.vacanciesService = vacanciesService;
    }
    create(vacancyDto, request) {
        return this.vacanciesService.createVacancy(vacancyDto, request);
    }
    getAllVacancies() {
        return this.vacanciesService.getAllVacancies();
    }
    updateVacancy(id, updateVacancyDto) {
        return this.vacanciesService.updateVacancy(id, updateVacancyDto);
    }
    deleteVacancy(id) {
        return this.vacanciesService.deleteVacancy(id);
    }
};
__decorate([
    (0, common_1.Post)('/insert'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_auth_decorator_1.Roles)('admin', 'user_company'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vacancy_dto_1.CreateVacancyDto,
        Request]),
    __metadata("design:returntype", void 0)
], VacanciesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/get_all_vacancies'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VacanciesController.prototype, "getAllVacancies", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    (0, roles_auth_decorator_1.Roles)('admin', 'user_company'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], VacanciesController.prototype, "updateVacancy", null);
__decorate([
    (0, common_1.Post)('/delete/:id'),
    (0, roles_auth_decorator_1.Roles)('admin', 'user_company'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VacanciesController.prototype, "deleteVacancy", null);
VacanciesController = __decorate([
    (0, common_1.Controller)('vacancies'),
    __metadata("design:paramtypes", [vacancies_service_1.VacanciesService])
], VacanciesController);
exports.VacanciesController = VacanciesController;
//# sourceMappingURL=vacancies.controller.js.map