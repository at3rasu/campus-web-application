import { Module } from '@nestjs/common';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles';
import { UsersCompanyController } from './users-company.controller';
import { UserCompany } from './users-company.model';
import { UsersCompanyService } from './users-company.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  providers: [UsersCompanyService],
  controllers: [UsersCompanyController],
  imports: [
    SequelizeModule.forFeature([Role, UserCompany, UserRoles]),
    RolesModule
  ],
  exports: [UsersCompanyService]
})
export class UsersCompanyModule {}
