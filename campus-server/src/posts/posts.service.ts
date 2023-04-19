import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './posts.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post) private postRepository: typeof Post,
                private jwtService: JwtService){}

    async createPost(postDto: CreatePostDto){
        const post = await this.postRepository.create(postDto);
        return this.generateToken(post);
    }

    private async generateToken(post: Post){
        const payload = {id: post.id, email: post.email, name : post.nameVacancy}
        return{
            token: this.jwtService.sign(payload)
        }
    }
}
