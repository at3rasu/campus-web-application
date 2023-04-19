import { Module, forwardRef } from '@nestjs/common';
import { Role } from 'src/roles/roles.model';
import { UsersCompanyController } from './users-company.controller';
import { UserCompany } from './users-company.model';
import { UsersCompanyService } from './users-company.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { RolesModule } from 'src/roles/roles.module';
import { UserCompanyRoles } from 'src/roles/user_company_roles';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [UsersCompanyService],
  controllers: [UsersCompanyController],
  imports: [
    SequelizeModule.forFeature([Role, UserCompany, UserCompanyRoles]),
    RolesModule,
    forwardRef(() => AuthModule)
  ],
  exports: [
    UsersCompanyService
  ]
})
export class UsersCompanyModule {}
