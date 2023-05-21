import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { Vacancy } from './vacancies.model';
import { JwtService } from '@nestjs/jwt';
import { UsersCompanyService } from 'src/users-company/users-company.service';
export declare class VacanciesService {
    private vacancyRepository;
    private jwtService;
    private userCompanyService;
    constructor(vacancyRepository: typeof Vacancy, jwtService: JwtService, userCompanyService: UsersCompanyService);
    createVacancy(vacancyDto: CreateVacancyDto, req: any): Promise<{
        token: string;
    }>;
    private generateToken;
    getAllVacancies(): Promise<Vacancy[]>;
    deleteVacancy(id: any): Promise<number>;
    updateVacancy(id: any, updateVacancyDto: any): Promise<[affectedCount: number, affectedRows: Vacancy[]]>;
}
