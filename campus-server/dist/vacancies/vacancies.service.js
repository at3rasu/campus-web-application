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
exports.VacanciesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const vacancies_model_1 = require("./vacancies.model");
const jwt_1 = require("@nestjs/jwt");
let VacanciesService = class VacanciesService {
    constructor(vacancyRepository, jwtService) {
        this.vacancyRepository = vacancyRepository;
        this.jwtService = jwtService;
    }
    async createVacancy(vacancyDto, req) {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const userCompanyId = this.jwtService.verify(token).id;
        console.log(userCompanyId);
        vacancyDto.userCompanyId = userCompanyId;
        const vacancy = await this.vacancyRepository.create(vacancyDto);
        return this.generateToken(vacancy);
    }
    async generateToken(vacancy) {
        const payload = { id: vacancy.id, email: vacancy.email, name: vacancy.nameVacancy };
        return {
            token: this.jwtService.sign(payload)
        };
    }
};
VacanciesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(vacancies_model_1.Vacancy)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], VacanciesService);
exports.VacanciesService = VacanciesService;
//# sourceMappingURL=vacancies.service.js.map