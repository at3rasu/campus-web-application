import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/users/users.service';
import { Resume } from './resume.model';

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
        console.log(user)
        resumeDto.userId = user.id
        const vacancy = await this.vacancyRepository.create({...resumeDto,
            // image: fileName
        });
        const token = (await this.authService.refreshTokenByUser(user.login)).token
        req.headers.authorization = `Bearer ${token}`
        return this.generateToken(vacancy);
    }

    private async generateToken(resume: Resume){
        const payload = {id: resume.id, name : resume.name}
        return{
            token: this.jwtService.sign(payload)
        }
    }
}
