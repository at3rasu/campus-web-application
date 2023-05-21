import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/users/users.service';
import { Resume } from './resume.model';

@Injectable()
export class ResumeService {
    constructor(@InjectModel(Resume) private resumeRepository: typeof Resume,
                private jwtService: JwtService,
                private userService: UsersService,
                // private uploadFilesService: UploadFilesService,
                // private filesService: FilesService,
                private authService: AuthService){}

    async createResume(resumeDto, req){
        const user = await this.userService.getUserByRequest(req)
        console.log(user)
        resumeDto.userId = user.id
        const vacancy = await this.resumeRepository.create({...resumeDto,
            // image: fileName
        });
        return this.generateToken(vacancy);
    }

    async getAllResume(){
        const allResume = await this.resumeRepository.findAll({include: {all: true}})
        return allResume
    }

    private async generateToken(resume: Resume){
        const payload = {id: resume.id, name : resume.name}
        return{
            token: this.jwtService.sign(payload)
        }
    }

    async deleteResume(id){
        return await this.resumeRepository.destroy({ where: { id: id } });
    }

    async updateResume(id, updateResumeDto){
        const resume = await this.resumeRepository.update(updateResumeDto, {where: {id}, returning: true})
        return resume
    }
}
