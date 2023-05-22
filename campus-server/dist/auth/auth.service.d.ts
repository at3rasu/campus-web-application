import { JwtService } from '@nestjs/jwt/dist';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { CreateUserCompanyDto } from 'src/users-company/dto/create-user-company.dto';
import { UsersCompanyService } from 'src/users-company/users-company.service';
export declare class AuthService {
    private userService;
    private userCompanyService;
    private jwtService;
    constructor(userService: UsersService, userCompanyService: UsersCompanyService, jwtService: JwtService);
    login(userDto: any): Promise<{
        userToken: string;
    }>;
    loginUserCompany(userDto: any): Promise<{
        companyToken: string;
    }>;
    registration(userDto: CreateUserDto): Promise<{
        userToken: string;
    }>;
    registrationUserCompany(userDto: CreateUserCompanyDto): Promise<{
        companyToken: string;
    }>;
    private validateRegistration;
    private generateUserToken;
    private generateCompanyToken;
    private validateUser;
    private validateUserCompany;
    private equalUser;
}
