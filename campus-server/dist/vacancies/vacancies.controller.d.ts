import { VacanciesService as VacanciesService } from './vacancies.service';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
export declare class VacanciesController {
    private vacanciesService;
    constructor(vacanciesService: VacanciesService);
    create(vacancyDto: CreateVacancyDto, image: any, request: Request): Promise<{
        token: string;
    }>;
    getAllVacancies(): Promise<import("./vacancies.model").Vacancy[]>;
}
