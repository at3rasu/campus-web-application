import { RolesService } from 'src/roles/roles.service';
import { UserCompany } from './users-company.model';
import { CreateUserCompanyDto } from './dto/create-user-company.dto';
import { JwtService } from '@nestjs/jwt';
export declare class UsersCompanyService {
    private userCompanyRepository;
    private roleService;
    private jwtService;
    constructor(userCompanyRepository: typeof UserCompany, roleService: RolesService, jwtService: JwtService);
    createUser(dto: CreateUserCompanyDto): Promise<UserCompany>;
    getAllUsers(): Promise<UserCompany[]>;
    getUserByEmail(email: string): Promise<UserCompany>;
    getUserByLogin(login: string): Promise<UserCompany>;
    getVacanciesByUser(req: any): Promise<import("../vacancies/vacancies.model").Vacancy[]>;
    getUserCompanyByRequest(req: any): Promise<UserCompany>;
    getUserByToken(token: any): Promise<UserCompany>;
}
