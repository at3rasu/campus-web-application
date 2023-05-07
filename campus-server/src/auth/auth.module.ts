import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserCompany } from 'src/users-company/users-company.model';
import { UsersCompanyModule } from 'src/users-company/users-company.module';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef( () => UsersModule),
    forwardRef( () => UsersCompanyModule),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions: {
        expiresIn: '30m'
      }
    }
    )
  ],
  exports: [
    AuthService,
    JwtModule
  ]
})
export class AuthModule {}
