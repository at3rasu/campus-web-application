import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { Vacancy } from './vacancies.model';
import { JwtService } from '@nestjs/jwt';
import { UploadFilesService } from 'src/upload-files/upload-files.service';
export declare class VacanciesService {
    private vacancyRepository;
    private jwtService;
    private uploadFilesService;
    constructor(vacancyRepository: typeof Vacancy, jwtService: JwtService, uploadFilesService: UploadFilesService);
    createVacancy(vacancyDto: CreateVacancyDto, image: any, req: any): Promise<{
        token: string;
    }>;
    private generateToken;
}
