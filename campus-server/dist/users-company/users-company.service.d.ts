import { RolesService } from 'src/roles/roles.service';
import { UserCompany } from './users-company.model';
import { CreateUserCompanyDto } from './dto/create-user-company.dto';
export declare class UsersCompanyService {
    private userCompanyRepository;
    private roleService;
    constructor(userCompanyRepository: typeof UserCompany, roleService: RolesService);
    createUser(dto: CreateUserCompanyDto): Promise<UserCompany>;
    getAllUsers(): Promise<UserCompany[]>;
    getUserByEmail(email: string): Promise<UserCompany>;
    getUserByLogin(login: string): Promise<UserCompany>;
}
