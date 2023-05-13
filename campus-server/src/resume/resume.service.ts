import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ResumeService {
    constructor(@InjectModel(Resume) private vacancyRepository: typeof Resume,
                private jwtService: JwtService,
                private userService: UsersService,
                // private uploadFilesService: UploadFilesService,
                // private filesService: FilesService,
                private authService: AuthService){}

    async createResume(resumeDto, req){
        const user = await this.userService.getUserCompanyByReq(req)
        resumeDto.userId = user.id
        const vacancy = await this.vacancyRepository.create({...resumeDto,
            // image: fileName
        });
        const token = (await this.authService.refreshToken(user.login)).token
        req.headers.authorization = `Bearer ${token}`
        return this.generateToken(vacancy);
    }
}
