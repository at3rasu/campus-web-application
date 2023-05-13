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
exports.ResumeService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const sequelize_1 = require("@nestjs/sequelize");
const auth_service_1 = require("../auth/auth.service");
const users_service_1 = require("../users/users.service");
const resume_model_1 = require("./resume.model");
let ResumeService = class ResumeService {
    constructor(resumeRepository, jwtService, userService, authService) {
        this.resumeRepository = resumeRepository;
        this.jwtService = jwtService;
        this.userService = userService;
        this.authService = authService;
    }
    async createResume(resumeDto, req) {
        const user = await this.userService.getUserByRequest(req);
        console.log(user);
        resumeDto.userId = user.id;
        const vacancy = await this.resumeRepository.create(Object.assign({}, resumeDto));
        return this.generateToken(vacancy);
    }
    async getAllResume() {
        const allResume = await this.resumeRepository.findAll({ include: { all: true } });
        return allResume;
    }
    async generateToken(resume) {
        const payload = { id: resume.id, name: resume.name };
        return {
            token: this.jwtService.sign(payload)
        };
    }
};
ResumeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(resume_model_1.Resume)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService,
        users_service_1.UsersService,
        auth_service_1.AuthService])
], ResumeService);
exports.ResumeService = ResumeService;
//# sourceMappingURL=resume.service.js.map