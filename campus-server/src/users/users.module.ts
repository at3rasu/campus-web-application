import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from 'src/roles/roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { UserRoles } from 'src/roles/user-roles';
import { UsersController } from './users.controller';
import { User } from './users.model';
import { UsersService } from './users.service';
import { AuthModule } from 'src/auth/auth.module';
import { Vacancy } from 'src/vacancies/vacancies.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([Role, User, UserRoles]),
    RolesModule,
    forwardRef(() => AuthModule)
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule {}
