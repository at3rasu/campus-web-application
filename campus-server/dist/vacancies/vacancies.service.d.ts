import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { Vacancy } from './vacancies.model';
import { JwtService } from '@nestjs/jwt';
export declare class VacanciesService {
    private vacancyRepository;
    private jwtService;
    constructor(vacancyRepository: typeof Vacancy, jwtService: JwtService);
    createVacancy(vacancyDto: CreateVacancyDto): Promise<{
        token: string;
    }>;
    private generateToken;
}
