import { CreateUserCompanyDto } from 'src/users-company/dto/create-user-company.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(userDto: any): Promise<{
        token: string;
    }>;
    registration(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    registrationUserCompany(userDto: CreateUserCompanyDto): Promise<{
        token: string;
    }>;
}
