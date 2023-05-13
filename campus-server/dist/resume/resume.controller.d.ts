import { CreateResumeDto } from './dto/create-resume.dto';
import { ResumeService } from './resume.service';
export declare class ResumeController {
    private resumeService;
    constructor(resumeService: ResumeService);
    create(resumeDto: CreateResumeDto, request: Request): Promise<{
        token: string;
    }>;
}
