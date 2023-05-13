import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/users/users.service';
import { Resume } from './resume.model';
export declare class ResumeService {
    private vacancyRepository;
    private jwtService;
    private userService;
    private authService;
    constructor(vacancyRepository: typeof Resume, jwtService: JwtService, userService: UsersService, authService: AuthService);
    createResume(resumeDto: any, req: any): Promise<{
        token: string;
    }>;
    private generateToken;
}
