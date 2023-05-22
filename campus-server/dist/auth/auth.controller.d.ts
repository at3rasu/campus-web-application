import { CreateUserCompanyDto } from 'src/users-company/dto/create-user-company.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { Response, Request } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(userDto: any, resp: Response, request: Request): Promise<{
        userToken: string;
    }>;
    login_userCompany(userDto: any, resp: Response, request: Request): Promise<{
        companyToken: string;
    }>;
    registration(userDto: CreateUserDto): Promise<{
        userToken: string;
    }>;
    registrationUserCompany(userDto: CreateUserCompanyDto): Promise<{
        companyToken: string;
    }>;
}
