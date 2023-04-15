import { Controller, Post, Body } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}

    @Post()
    create(@Body() postDto: CreatePostDto){
        return this.postsService.createPost(postDto);
    }
}
