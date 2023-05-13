import { Module} from '@nestjs/common';
import { VacanciesController } from './vacancies.controller';
import { VacanciesService } from './vacancies.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Vacancy } from './vacancies.model';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';
import { UsersCompanyService } from 'src/users-company/users-company.service';
import { UserCompany } from 'src/users-company/users-company.model';
import { UploadFilesModule } from 'src/upload-files/upload-files.module';
import { UsersCompanyModule } from 'src/users-company/users-company.module';
import { FilesModule } from 'src/files/files.module';

@Module({
  controllers: [VacanciesController],
  imports: [
    SequelizeModule.forFeature([Vacancy, UserCompany]),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions: {
        expiresIn: '30m'
      }}),
    UploadFilesModule,
    // FilesModule,
    UsersCompanyModule,
    AuthModule
  ],
  exports:[
    VacanciesService
  ],
  providers: [
    VacanciesService,
    // UsersCompanyService,
    JwtModule
    
  ]
})
export class VacanciesModule {}
