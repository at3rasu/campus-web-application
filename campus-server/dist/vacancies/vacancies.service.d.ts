import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { Vacancy } from './vacancies.model';
import { JwtService } from '@nestjs/jwt';
import { UploadFilesService } from 'src/upload-files/upload-files.service';
import { UsersCompanyService } from 'src/users-company/users-company.service';
import { AuthService } from 'src/auth/auth.service';
export declare class VacanciesService {
    private vacancyRepository;
    private jwtService;
    private uploadFilesService;
    private userCompanyService;
    private authService;
    constructor(vacancyRepository: typeof Vacancy, jwtService: JwtService, uploadFilesService: UploadFilesService, userCompanyService: UsersCompanyService, authService: AuthService);
    createVacancy(vacancyDto: CreateVacancyDto, image: any, req: any): Promise<{
        token: string;
    }>;
    private generateToken;
    getAllVacancies(): Promise<Vacancy[]>;
}
