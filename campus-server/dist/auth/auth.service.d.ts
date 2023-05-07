import { JwtService } from '@nestjs/jwt/dist';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { CreateUserCompanyDto } from 'src/users-company/dto/create-user-company.dto';
import { UsersCompanyService } from 'src/users-company/users-company.service';
import { Response } from 'express';
export declare class AuthService {
    private userService;
    private userCompanyService;
    private jwtService;
    constructor(userService: UsersService, userCompanyService: UsersCompanyService, jwtService: JwtService);
    login(userDto: any, resp: Response): Promise<{
        token: string;
    }>;
    loginUserCompany(userDto: any, resp: Response): Promise<{
        token: string;
    }>;
    registration(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    registrationUserCompany(userDto: CreateUserCompanyDto): Promise<{
        token: string;
    }>;
    private validateRegistration;
    private generateToken;
    private generateTokenUserComp;
    private validateUser;
    private validateUserCompany;
    private equalUser;
    refreshToken(login: any): Promise<{
        token: string;
    }>;
}
