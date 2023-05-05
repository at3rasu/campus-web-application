import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { Vacancy } from './vacancies.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class VacanciesService {
    constructor(@InjectModel(Vacancy) private vacancyRepository: typeof Vacancy,
                private jwtService: JwtService){}

    async createVacancy(vacancyDto: CreateVacancyDto){
        const vacancy = await this.vacancyRepository.create(vacancyDto);
        return this.generateToken(vacancy);
    }

    private async generateToken(post: Vacancy){
        const payload = {id: post.id, email: post.email, name : post.nameVacancy}
        return{
            token: this.jwtService.sign(payload)
        }
    }
}
