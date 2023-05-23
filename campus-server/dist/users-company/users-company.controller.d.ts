import { UsersCompanyService } from './users-company.service';
import { CreateUserCompanyDto } from './dto/create-user-company.dto';
import { UsersService } from 'src/users/users.service';
export declare class UsersCompanyController {
    private usersCompanyService;
    private usersService;
    constructor(usersCompanyService: UsersCompanyService, usersService: UsersService);
    create(userCompanyDto: CreateUserCompanyDto): Promise<import("./users-company.model").UserCompany>;
    getAll(): Promise<import("./users-company.model").UserCompany[]>;
    getVacanciesByUser(request: Request): Promise<import("../vacancies/vacancies.model").Vacancy[]>;
    getuserByToken(token: any): Promise<import("./users-company.model").UserCompany>;
}
