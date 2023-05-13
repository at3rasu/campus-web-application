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
exports.UsersCompanyController = void 0;
const common_1 = require("@nestjs/common");
const users_company_service_1 = require("./users-company.service");
const create_user_company_dto_1 = require("./dto/create-user-company.dto");
const common_2 = require("@nestjs/common");
const roles_guard_1 = require("../auth/roles.guard");
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
let UsersCompanyController = class UsersCompanyController {
    constructor(usersCompanyService) {
        this.usersCompanyService = usersCompanyService;
    }
    create(userCompanyDto) {
        return this.usersCompanyService.createUser(userCompanyDto);
    }
    getAll() {
        return this.usersCompanyService.getAllUsers();
    }
    getVacanciesByUser(request) {
        return this.usersCompanyService.getVacanciesByUser(request);
    }
};
__decorate([
    (0, common_2.Post)(),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_company_dto_1.CreateUserCompanyDto]),
    __metadata("design:returntype", void 0)
], UsersCompanyController.prototype, "create", null);
__decorate([
    (0, common_2.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersCompanyController.prototype, "getAll", null);
__decorate([
    (0, common_2.Get)('/get_vacancies'),
    (0, roles_auth_decorator_1.Roles)('admin', 'user_company'),
    (0, common_2.UseGuards)(roles_guard_1.RolesGuard),
    __param(0, (0, common_2.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], UsersCompanyController.prototype, "getVacanciesByUser", null);
UsersCompanyController = __decorate([
    (0, common_1.Controller)('users-company'),
    __metadata("design:paramtypes", [users_company_service_1.UsersCompanyService])
], UsersCompanyController);
exports.UsersCompanyController = UsersCompanyController;
//# sourceMappingURL=users-company.controller.js.map