import { UsersCompanyService } from './users-company.service';
import { CreateUserCompanyDto } from './dto/create-user-company.dto';
export declare class UsersCompanyController {
    private usersCompanyService;
    constructor(usersCompanyService: UsersCompanyService);
    create(userCompanyDto: CreateUserCompanyDto): Promise<import("./users-company.model").UserCompany>;
    getAll(): Promise<import("./users-company.model").UserCompany[]>;
    getVacanciesByUser(request: Request): Promise<import("../vacancies/vacancies.model").Vacancy[]>;
}
