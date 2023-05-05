import { Module} from '@nestjs/common';
import { VacanciesController } from './vacancies.controller';
import { VacanciesService } from './vacancies.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Vacancy } from './vacancies.model';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [VacanciesController],
  imports: [
    SequelizeModule.forFeature([Vacancy]),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions: {
        expiresIn: '24h'
      }})
  ],
  exports:[
    VacanciesService
  ],
  providers: [
    VacanciesService,
    JwtModule
  ]
})
export class VacanciesModule {}
