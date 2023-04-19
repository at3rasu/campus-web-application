import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}

    @Post()
    @UseGuards(RolesGuard)
    @Roles('admin', 'user_company')
    create(@Body() postDto: CreatePostDto){
        return this.postsService.createPost(postDto);
    }
}
