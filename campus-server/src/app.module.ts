import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";
import { User } from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles";
import { AuthModule } from './auth/auth.module';
import { UsersCompanyModule } from './users-company/users-company.module';
import { UserCompany } from "./users-company/users-company.model";
import { UserCompanyRoles } from "./roles/user_company_roles";
import { Vacancy } from "./vacancies/vacancies.model";
import { VacanciesModule } from "./vacancies/vacancies.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";

@Module({
    controllers: [],
    providers: [],
    imports: [
      ConfigModule.forRoot({
        envFilePath: '.development.env'
      }),
      
      ServeStaticModule.forRoot({
        rootPath: path.resolve(__dirname, 'static'),
      }),

      SequelizeModule.forRoot({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRESS_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRESS_PASSWORD,
        database: process.env.POSTGRES_DB,
        models: [User, Role, UserRoles, UserCompany, Vacancy, UserCompanyRoles],
        autoLoadModels: true
      }),
      UsersModule,
      RolesModule,
      AuthModule,
      UsersCompanyModule,
      VacanciesModule
    ]
})

export class AppModule{}