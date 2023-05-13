import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/users/users.service';
import { Resume } from './resume.model';
export declare class ResumeService {
    private resumeRepository;
    private jwtService;
    private userService;
    private authService;
    constructor(resumeRepository: typeof Resume, jwtService: JwtService, userService: UsersService, authService: AuthService);
    createResume(resumeDto: any, req: any): Promise<{
        token: string;
    }>;
    getAllResume(): Promise<Resume[]>;
    private generateToken;
}
