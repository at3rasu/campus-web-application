import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './posts.model';
import { JwtService } from '@nestjs/jwt';
export declare class PostsService {
    private postRepository;
    private jwtService;
    constructor(postRepository: typeof Post, jwtService: JwtService);
    createPost(postDto: CreatePostDto): Promise<{
        token: string;
    }>;
    private generateToken;
}
