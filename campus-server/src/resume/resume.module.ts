import { Module } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { ResumeController } from './resume.controller';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { AuthModule } from 'src/auth/auth.module';
import { Resume } from './resume.model';
import { UsersModule } from 'src/users/users.module';

@Module({
    controllers: [ResumeController],
    imports: [
      SequelizeModule.forFeature([Resume, User]),
      JwtModule.register({
        secret: process.env.PRIVATE_KEY || 'SECRET',
        signOptions: {
          expiresIn: '30m'
        }}),
      UsersModule,
      AuthModule
    ],
    exports:[
      ResumeService
    ],
    providers: [
      ResumeService,
      JwtModule
  ]
  
})
export class ResumeModule {}
